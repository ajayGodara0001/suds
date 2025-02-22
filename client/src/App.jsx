import ScrollToTop from "./scroll.jsx"
import './App.css'
import "./index.css";
import {  Route, Routes } from   "react-router-dom"
import axios from 'axios'
import Login from './components/Login.jsx'
import Register from './components/Signup.jsx'
import Home from './components/Home/Home.jsx'
import Navbar from './components/Navbar.jsx'

import { useState } from 'react'
import SearchSlide from './components/SearchSlide.jsx'
import Footer from './components/Footer.jsx'
import OtpVerification from './components/VerifyEmail.jsx'
import ProfilePage from './components/ProfileSlider.jsx'
import ContactUs from './components/Contact.jsx'
import AboutUs from './components/About.jsx'
import Detail from './components/shop/detail.jsx'

import { useEffect } from 'react'
import Shop from './components/shop/shop.jsx'
import CartTab from './components/cart/cartTab.jsx'
import { BuyNow } from './components/BuyNow.jsx'
import UserOrders from './components/Myorders.jsx'
import CheckOutPage from './components/shop/CheckOutPage.jsx';
import ForgotPassword from "./components/forgotPassword.jsx";
import ResetPassword from "./components/resetPassword.jsx";

function App() {
 
   let  userId
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({})
  useEffect(() => {
    const backend_url = import.meta.env.VITE_BACKEND_URI
    axios.get(`${backend_url}/api/auth/check`, { withCredentials: true }) 
      .then((response) => { 
      setUser(response.data.user)
      
        setIsAuthenticated(response.data.isAuthenticated);
      })
      .catch(() => {  
        setIsAuthenticated(false);
      });
  }, []);


  const [isSearchSliderOpen, setIsSearchSliderOpen] = useState(false);
  const [isCartSliderOpen, setIsCartSliderOpen] = useState(false);
  const [isProfileSlider, setisProfileSlider] = useState(false);

  // Function to toggle the slider
  const toggleSearchSlider = () => {
    setIsSearchSliderOpen(!isSearchSliderOpen);  
  };
  const toggleCartSlider = () => {
    setIsCartSliderOpen(!isCartSliderOpen);  
  };
  const toggleProfileSlider = () => {
    setisProfileSlider(!isProfileSlider);  
  };

  return (
    <>
    <ProfilePage user={user} toggleProfileSlider={toggleProfileSlider} isProfileSlider={isProfileSlider}  />
  <Navbar  toggleSearchSlider={toggleSearchSlider} toggleCartSlider={toggleCartSlider} toggleProfileSlider={toggleProfileSlider} isAuthenticated={isAuthenticated} />
  <SearchSlide isSearchSliderOpen={isSearchSliderOpen} toggleSearchSlider={toggleSearchSlider} />
  <CartTab isCartSliderOpen={isCartSliderOpen} toggleCartSlider={toggleCartSlider} />
   <ScrollToTop /> 
   <Routes >
      <Route path='/'element={<Home />} />
      <Route path='/:slug'element={<Detail />} />
      <Route path='/login'element={<Login />} />
      <Route path='/register'element={<Register />} />
      <Route path='/about'element={<AboutUs />} />
      <Route path='/contact'element={<ContactUs />} />
      <Route path='/shop'element={<Shop />} />
      <Route path='/cart/checkout'element={<CheckOutPage />} />
      <Route path='/profile'element={<ProfilePage />} />
      <Route path='/verification' element={<OtpVerification />} />
      <Route path='/shop/:slug' element={<Detail />} />
      <Route path='/buynow' element={<BuyNow />} />
      <Route path='/myorders' element={<UserOrders />} />

      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
