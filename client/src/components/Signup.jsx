import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import {  X, Menu } from "lucide-react";

export default function Register() {
  const navigate = useNavigate()
  const back = () =>{
    navigate("/")
}
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Registering with", data);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96 text-center">
        <div className="flex  flex-row justify-between mb-5  items-center">
        <h2 className="text-2xl font-semibold ">Register</h2>
        <span> <X onClick={back} className=" rounded-md px-2 hover:scale-125  cursor-pointer " size={40} /></span>
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
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <p className="text-red-500 text-sm mb-2">{errors.password.message}</p>}
          
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
          >
            Register
          </button>
        </form>
        <hr className="my-4" />
       <NavLink to="/login" className="text-blue-500 font-semibold">Back to Login</NavLink>
      </div>
    </div>
  );
}