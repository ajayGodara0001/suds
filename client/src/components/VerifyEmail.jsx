import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

const OtpVerification = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const [loading, setLoading] = useState(false);

 const navigate = useNavigate()
  const handleVerify = async () => {
    setLoading(true)
    if (!verificationCode) {
      alert("Please enter the OTP.");
      return;
    }
    const backend_url = import.meta.env.VITE_BACKEND_URI

    await axios.post(`${backend_url}/api/auth/verify-email`, {verificationCode},{ withCredentials: true })
    .then((res) => {
       toast.success(res.data.message);
       window.location.reload()
       navigate("/")    
    })
    .catch((error)=>{
      console.error("Error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message ||  error.message);
         return
    })
    .finally(() => {
     
        window.location.reload();
   
        setLoading(false); // Enable button again if needed
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">Verify Your Email</h2>
        <p className="text-gray-600 mb-4">Enter the OTP sent to your email.</p>
        <input
          type="text"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
          placeholder="Enter OTP"
          className="p-2 border border-gray-300 rounded-md w-full text-center mb-3"
        />
        <button
            type="submit"
            onClick={handleVerify}
            className={`w-full text-white py-2 rounded-lg transition ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
              }`}
            disabled={loading}
          >
            {loading ? "Verifing..." : "Verify"}
          </button>
      </div>
    </div>
  );
};

export default OtpVerification;
