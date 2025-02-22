import { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const backend_url = import.meta.env.VITE_BACKEND_URI;

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        `${backend_url}/api/auth/reset-password/${token}`,
        { password },
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
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter new password"
          className="p-2 border border-gray-300 rounded-md w-full text-center mb-3"
          required
        />
        <button
          type="submit"
          onClick={handleResetPassword}
          className={`w-full text-white py-2 rounded-lg transition ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
          }`}
          disabled={loading}
        >
          {loading ? "Resetting..." : "Reset Password"}
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
