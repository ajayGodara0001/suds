import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const OtpVerification = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const backend_url = import.meta.env.VITE_BACKEND_URI;

    await axios
      .post(
        `${backend_url}/api/auth/verify-email`,
        { verificationCode: data.otp },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success(res.data.message);
        navigate("/");
        setTimeout(() => {
          window.location.reload(); // Reload after 1.5 seconds
        }, 1000);
      })
      .catch((error) => {
        console.error("Error:", error.response?.data || error.message);
        toast.error(error.response?.data?.message || "Invalid OTP. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">Verify Your Email</h2>
        <p className="text-gray-600 mb-4">Enter the OTP sent to your email.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <input
            type="text"
            placeholder="Enter OTP"
            className={`p-2 border rounded-md w-full text-center mb-1 ${
              errors.otp ? "border-red-500" : "border-gray-300"
            }`}
            {...register("otp", { required: "Please enter the OTP." })}
          />
          {errors.otp && <p className="text-red-500 text-sm mb-2">{errors.otp.message}</p>}

          <button
            type="submit"
            className={`w-full text-white cursor-pointer py-2 rounded-lg transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            }`}
            disabled={loading}
          >
            {loading ? "Verifying..." : "Verify"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default OtpVerification;
