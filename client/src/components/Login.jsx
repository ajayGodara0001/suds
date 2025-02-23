import { useForm } from "react-hook-form";
import {  X, Menu } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios"
import { useState } from "react";
import toast from 'react-hot-toast';

export default function Login() {
    const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


   const back = () =>{
        navigate("/")
   }
   const onSubmit = async (data) => {
    setLoading(true)
    const user = {
      email:data.email,
      password:data.password
    }         
    const backend_url = import.meta.env.VITE_BACKEND_URI
    await axios.post(`${backend_url}/api/auth/login`, user, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message)
        navigate("/")
        setTimeout(() => {
          window.location.reload();
      }, 500);
      })
      .catch((error)=>{
        console.error("Error:", error.response?.data || error.message);
        toast.error(error.response?.data?.message ||  error.message);
      })
      .finally(() => {
        setLoading(false); // Enable button again if needed
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96 text-center">
       

        <div className="flex flex-row justify-between mb-5  items-center">
          <h2 className="text-2xl font-semibold ">Login</h2>
          <span> <X onClick={back} className=" rounded-md px-2 hover:scale-125  cursor-pointer " size={40} /></span></div>
        <form onSubmit={handleSubmit(onSubmit)}>
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
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <p className="text-red-500 text-sm mb-2">{errors.password.message}</p>}
          
          <button
            type="submit"
            className={`w-full text-white cursor-pointer py-2 rounded-lg transition ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
              }`}
            disabled={loading}
          >
            {loading ? "Loging..." : "Login"}
          </button>
        </form>
         <NavLink to="/forgot-password" className="text-blue-500 text-sm block mt-2">forgot password</NavLink>
         
        <hr className="my-4" />
       
        <NavLink  className="text-blue-500 font-semibold" to="/register">Register Now</NavLink>
      </div>
    </div>
  );
}