import express from "express";
import { validateLogin, validateSignUp } from "../middleware/validateRequest.js";
import { login, signUp, verifyEmail } from "../controller/authController.js";
import jwt from "jsonwebtoken"
const router = express.Router();


// Sign Up Route
router.post('/signup', validateSignUp, signUp);

// Email Verification Route
router.post('/verify-email', verifyEmail);

// Login Route
router.post('/login', validateLogin, login);


// logout route
router.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,  // ✅ Required for HTTPS (set to false for localhost)
    sameSite: "None", // ✅ Required for cross-origin requests
  });

  res.status(200).json({ message: "Logged out successfully" });
});

// check authentication
router.get('/check', (req, res) => {

  const token = req.cookies.token;

  if (!token) {
    return res.status(200).json({ isAuthenticated: false, user: null });
  }

  try {
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;  // Attach user info to the request object
    res.status(200).json({ isAuthenticated: true, user: decoded });
  } catch (error) {
    res.status(400).json({ message: 'Invalid token' });
  }
});

export default router;
