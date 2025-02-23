import { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const backend_url = import.meta.env.VITE_BACKEND_URI;
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${backend_url}/api/auth/reset-password/${token}`,
        { password: data.password },
        { withCredentials: true }
      );
      toast.success(res.data.message);
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">Reset Password</h2>
        <p className="text-gray-600 mb-4">Enter a new password for your account.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <input
            type="password"
            placeholder="Enter new password"
            className="p-2 border border-gray-300 rounded-md w-full text-center mb-3"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                message: "Password must contain at least one uppercase, one lowercase, and one number"
              }
            })}
          />
          {errors.password && <p className="text-red-500 text-sm mb-2">{errors.password.message}</p>}
          
          <input
            type="password"
            placeholder="Confirm new password"
            className="p-2 border border-gray-300 rounded-md w-full text-center mb-3"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) => value === watch("password") || "Passwords do not match"
            })}
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm mb-2">{errors.confirmPassword.message}</p>}
          
          <button
            type="submit"
            className={`w-full text-white py-2 cursor-pointer rounded-lg transition ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
            }`}
            disabled={loading}
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
