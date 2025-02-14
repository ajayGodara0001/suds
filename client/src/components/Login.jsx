import { useForm } from "react-hook-form";
import {  X, Menu } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


   const back = () =>{
        navigate("/")
   }
  const onSubmit = (data) => {
    console.log("Logging in with", data);
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
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
        <a href="#" className="text-blue-500 text-sm block mt-2">Forgot Password?</a>
        <hr className="my-4" />
       
        <NavLink  className="text-blue-500 font-semibold" to="/register">Register Now</NavLink>
      </div>
    </div>
  );
}