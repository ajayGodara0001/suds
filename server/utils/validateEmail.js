import axios from "axios"

// Replace with the actual email verification API URL and API key (if any)
const emailVerificationAPI = 'https://emailvalidation.abstractapi.com/v1/'; // Mock URL
const API_KEY = process.env.EMAIL_KEY;  // Use your actual API key if needed

// Function to verify email validity
export const verifyEmailAddress = async (email) => {
  try {
    const response = await axios.get(`${emailVerificationAPI}?api_key=${API_KEY}&email=${email}`);
    // Check if the email is valid or not
    if (response.data.deliverability === 'UNDELIVERABLE') {
      return false;
    } else {
      return true;
    }
  } catch (error) {
    console.error('Error validating email:', error);
    throw new Error('Error validating email');
  }
};


