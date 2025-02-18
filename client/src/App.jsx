
import './App.css'
import {  Route, Routes } from   "react-router-dom"
import axios from 'axios'
import Login from './components/Login.jsx'
import Register from './components/Signup.jsx'
import Home from './Home/Home.jsx'
import About from './components/About.jsx'
import ColorGrid from "./components/Shop.jsx"
import Navbar from './components/Navbar.jsx'
import Cart from './components/Cart.jsx'

import { useState } from 'react'
import SearchSlide from './components/SearchSlide.jsx'
import Footer from './components/Footer.jsx'
import Contact from './components/Contact.jsx'
import OtpVerification from './components/VerifyEmail.jsx'
import ProfilePage from './components/ProfileSlider.jsx'
import ProductDetails from './components/Productdetails.jsx'
import ContactUs from './components/Contact.jsx'
import AboutUs from './components/About.jsx'
import BuyPage from './components/Buy.jsx'

import { useEffect } from 'react'
function App() {
 

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:4000/api/auth/check", { withCredentials: true }) 
      .then((response) => {
        setIsAuthenticated(response.data.isAuthenticated);
      })
      .catch(() => {  
        setIsAuthenticated(false);
      });
  }, []);


  const [isSearchSliderOpen, setIsSearchSliderOpen] = useState(false);
  const [isCardSliderOpen, setIsCardSliderOpen] = useState(false);
  const [isProfileSlider, setisProfileSlider] = useState(false);

  // Function to toggle the slider
  const toggleSearchSlider = () => {
    setIsSearchSliderOpen(!isSearchSliderOpen);  
  };
  const toggleCardSlider = () => {
    setIsCardSliderOpen(!isCardSliderOpen);  
  };
  const toggleProfileSlider = () => {
    setisProfileSlider(!isProfileSlider);  
  };

  return (
    <>
    <ProfilePage toggleProfileSlider={toggleProfileSlider} isProfileSlider={isProfileSlider}  />
  <Navbar  toggleSearchSlider={toggleSearchSlider} toggleCardSlider={toggleCardSlider} toggleProfileSlider={toggleProfileSlider} isAuthenticated={isAuthenticated} />
  <SearchSlide isSearchSliderOpen={isSearchSliderOpen} toggleSearchSlider={toggleSearchSlider} />
  <Cart isCardSliderOpen={isCardSliderOpen} toggleCardSlider={toggleCardSlider} />
   <Routes >
      <Route path='/'element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path='/login'element={<Login />} />
      <Route path='/register'element={<Register />} />
      <Route path='/about'element={<AboutUs />} />
      <Route path='/contact'element={<ContactUs />} />
      <Route path='/shop'element={<ColorGrid />} />
      <Route path='/profile'element={<ProfilePage />} />
      <Route path='/Buy'element={<BuyPage />} />
      <Route path='/verification' element={<OtpVerification />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
