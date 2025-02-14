import { useState } from "react";
import { Menu, X, Search, ShoppingCart, User, LogOut  } from "lucide-react";
 import logo from "../../public/logo.png" 
import { NavLink } from "react-router-dom";
import { isAuthenticated } from "../auth/auth.js";

export default function Navbar({toggleSearchSlider, toggleCardSlider }) {
  const [isOpen, setIsOpen] = useState(false);

  const mobileLoginhandle = () => {
    setIsOpen(false)
    localStorage.removeItem("sudsUser")
    window.location.reload()

  }
  const yes = isAuthenticated()
  return (
    <nav className="sticky top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left Side: Hamburger Menu (Mobile) */}
        <button className="md:hidden  text-gray-700 cursor-pointer"  onClick={() => setIsOpen(true)}>
          <Menu size={28} />
        </button>

        {/* Center: Logo */}
        <div className="flex items-center ">
         <NavLink to="/"> <img  src={logo} alt="Logo" className="w-auto h-10 " /></NavLink>
        </div>

        {/* Desktop Navigation Links (Hidden on Mobile) */}
        <div className="hidden md:flex space-x-6 text-gray-700 text-lg font-medium">
      
          <NavLink to="/" >Home</NavLink>
          <NavLink to="/about" >About</NavLink>
          <NavLink to="/contact" >Contact</NavLink>
          <NavLink to="/shop" >Shop</NavLink>
        </div>

        {/* Right Side: Search, Cart, Login Icons */}
        <div className="flex items-center space-x-4 text-gray-700">
          <Search size={24} onClick={toggleSearchSlider} className="cursor-pointer" />
          <ShoppingCart size={24} onClick={toggleCardSlider} className="cursor-pointer" />
          {
            yes?<NavLink onClick={mobileLoginhandle} c > <LogOut  /></NavLink>
            :<NavLink to="/login"  ><User size={24} /></NavLink>
          }
        </div>
      </div>

      {/* Sidebar Menu (Mobile) */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden flex flex-col`}
      >
           {/* Menu Header with "Menu" Title & Hamburger Icon */}
           <div className="flex items-center justify-between border-b">
          <h2 className="text-xl font-semibold  px-5 py-4 text-white bg-black w-full">Menu</h2>
         
        </div>
        {/* Menu Section */}
        <div className="flex flex-col p-5 space-y-4 text-lg font-medium text-gray-700 flex-grow">
        <NavLink to="/" onClick={() => setIsOpen(false)} >Home</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}  >About</NavLink>
          <NavLink to="/contact"  onClick={() => setIsOpen(false)}>Contact</NavLink>
          <NavLink to="/shop" onClick={() => setIsOpen(false)} >Shop</NavLink>
        </div>

        {/* Bottom Section: Login & Close Button */}
        <div className="p-5 flex flex-col space-y-4" >
        {
        yes?<NavLink onClick={mobileLoginhandle} to="/" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center gap-3">
        <LogOut  />Logout   
      </NavLink>
         :<NavLink onClick={() => setIsOpen(false)} to="/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center">
        <User size={20} className="mr-2" />Login   
      </NavLink>
        }
          <button
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg cursor-pointer hover:bg-gray-400"
            onClick={() => setIsOpen(false)}
          >
            Close Menu
          </button>
        </div>
      </div>
    </nav>
  );
}
