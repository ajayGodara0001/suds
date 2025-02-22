import User from '../models/user.model.js';
import crypto from 'crypto'; 
import { verifyEmailAddress } from "../utils/validateEmail.js";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken"
import { sendVerificationEmail } from "../middleware/sendEmail.js";

export const signUp = async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      // Validate the email before creating the account
      const isEmailValid = await verifyEmailAddress(email);
      if (!isEmailValid) {
        return res.status(400).json({ message: 'Invalid or suspicious email address' });
      }
  
      // Check if the email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) return res.status(400).json({ message: 'Email already in use' });
  
      // Generate OTP
      const otp = crypto.randomBytes(3).toString('hex');  // 6-character OTP
  
      // Create a new user with the OTP
      const user = new User({
        name,
        email,
        password,
        verificationCode: otp,
      });
  
      await user.save();
  
      // Send OTP to email
      await sendVerificationEmail(email, otp);
  
      // Generate JWT token and send it as a cookie
      const token = user.generateAuthToken();
  
      // Set token as HttpOnly cookie (for security reasons)
      res.cookie('token', token, {
        httpOnly: true,  // Cookie cannot be accessed via JavaScript (more secure)
        secure: true,    // Only send the cookie over HTTPS (required for production)
        sameSite: "None", // Required for cross-origin cookies (Vercel & Render)
        maxAge: 60 * 60 * 1000, // 1-hour expiration
      });
  
      res.status(201).json({ message: 'User registered. Please check your email for OTP' });
    } catch (error) {
      console.error("Error details:", error);
  res.status(500).json({ message: 'Error registering user', error: error.message });
    }
  };


// Login Controller
export const login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Find the user by email
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: 'User not found' });
  
      // Check if the user is verified
      if (!user.isVerified){
        await User.deleteOne({email})
        return res.status(400).json({ message: 'Email not verified please signup again '});
        
      }
      // Verify password
      const isMatch = await user.matchPassword(password);
      if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
  
      // Generate JWT token
      const token = user.generateAuthToken();
  
      // Set token as HttpOnly cookie (for security reasons)
      res.cookie('token', token, {
        httpOnly: true,  // Cookie cannot be accessed via JavaScript (more secure)
        secure: true,    // Only send the cookie over HTTPS (required for production)
        sameSite: "None", // Required for cross-origin cookies (Vercel & Render)
        maxAge: 60 * 60 * 1000, // 1-hour expiration
      });
  
      res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      res.status(500).json({ message: 'Error logging in' });
    }
  };
  


// Email Verification Controller
export const verifyEmail = async (req, res) => {
    const   verificationCode  = req.body.verificationCode;
  
    try {
      const user = await User.findOne({ verificationCode });
      
      if (!user) return res.status(400).json({ message: 'Invalid OTP' });
  
      // Check if the OTP matches
      if (user.verificationCode !== verificationCode) {
        return res.status(400).json({ message: 'Invalid OTP' });
      }
  
      // Verify the email and clear OTP
      

      await user.verifyEmail(); // Calls method in schema

      await sendVerificationEmail(user.email, "thanks");

      res.status(200).json({ message: 'Email verified successfully' });
    } catch (error) {
      console.log(error.message)
      res.status(500).json({ message: 'Error verifying email' });
    }
  };
  

  
  // 🔹 Step 1: Handle Forgot Password Request
export const forgotPassword =  async (req, res) => {
      try {
      const { email } = req.body;
    
      const user = await User.findOne({ email });
  
      if (!user) return res.status(400).json({ message: "User not found forgoot password" });
  
      // Generate reset token
      const token = jwt.sign({ id: user._id },process.env.JWT_SECRET, { expiresIn: '1h'});
  
  
      const resetLink = `http://localhost:5173/reset-password/${token}`;
  

      res.cookie('token', token, {
        httpOnly: true,  // Cookie cannot be accessed via JavaScript (more secure)
        secure: true,    // Only send the cookie over HTTPS (required for production)
        sameSite: "None", // Required for cross-origin cookies (Vercel & Render)
        maxAge: 60 * 60 * 1000, // 1-hour expiration
      });
      const linkResetPassword =   `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`
     
      sendVerificationEmail(email, linkResetPassword)
  
      return res.json({ message: "Password reset link sent to your email" });
      } catch (error) {
        console.log(error.message)
      res.status(500).json({ message: 'forgot password error' });
      }
  }
  
  // 🔹 Step 2: Handle Password Reset
export const resetPassword =  async (req, res) => {
      const { token } = req.params;
      const { password } = req.body;
  
      try {
          const decoded = jwt.verify(token, process.env.JWT_SECRET );
          const hashedPassword = await bcrypt.hash(password, 10);
          await User.findByIdAndUpdate(decoded.id, { password: hashedPassword });
  
          res.json({ message: "Password reset successful" });
      } catch (err) {
          res.status(400).json({ message: "Invalid or expired token" });
      }
  }

  