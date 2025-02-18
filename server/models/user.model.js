import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken"

// User schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  verificationCode: {
    type: String,  // OTP for email verification
  },
  isVerified: {
    type: Boolean,
    default: false,  // Initially not verified
  },
}, {
  timestamps: true,  // Adds createdAt and updatedAt fields
});

// Pre-save hook to hash the password before saving it
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (err) {
    next(err);
  }
});

// Method to verify the password
userSchema.methods.matchPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

// Generate JWT access token
userSchema.methods.generateAuthToken = function() {
  const payload = {
    id: this._id,
    name: this.name,
    email: this.email,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });  // JWT expiry time can be adjusted
  return token;
};

// After email verification, remove OTP and set verification status to true
userSchema.methods.verifyEmail = async function () {
 
  this.verificationCode = "";
  this.isVerified = true;

  try {
    await this.save();
  } catch (error) {
    console.error("Error while saving user:", error);
    throw error; // Rethrow so it can be caught in the controller
  }
};


const User = mongoose.model('User', userSchema);

export default User;
