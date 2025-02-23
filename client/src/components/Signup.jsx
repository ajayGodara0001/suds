import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import toast from 'react-hot-toast';
import axios from "axios";
import { useState } from "react";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const back = () => {
    navigate("/");
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      return;
    }

    setLoading(true);
    const newUser = {
      email: data.email,
      name: data.name,
      password: data.password,
    };

    const backend_url = import.meta.env.VITE_BACKEND_URI;
    await axios.post(`${backend_url}/api/auth/signup`, newUser, { withCredentials: true })
      .then(() => {
        navigate("/verification");
      })
      .catch((error) => {
        console.error("Error:", error.response?.data || error.message);
        toast.error(error.response?.data?.message || error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96 text-center">
        <div className="flex flex-row justify-between mb-5 items-center">
          <h2 className="text-2xl font-semibold">Register</h2>
          <span>
            <X onClick={back} className="rounded-md px-2 hover:scale-125 cursor-pointer" size={40} />
          </span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 mb-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name.message}</p>}

          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email.message}</p>}

          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 8, message: "Password must be at least 8 characters long" },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                message: "Password must contain at least one uppercase, one lowercase, and one number"
              }
            })}
          />
          {errors.password && <p className="text-red-500 text-sm mb-2">{errors.password.message}</p>}

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-2 mb-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) => value === watch("password") || "Passwords do not match"
            })}
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm mb-2">{errors.confirmPassword.message}</p>}

          <button
            type="submit"
            className={`w-full text-white py-2 rounded-lg transition ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"}`}
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        <hr className="my-4" />
        <NavLink to="/login" className="text-blue-500 font-semibold">Back to Login</NavLink>
      </div>
    </div>
  );
}
