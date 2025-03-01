import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaClock, FaEnvelope } from 'react-icons/fa';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import toast from 'react-hot-toast';
import { NavLink } from "react-router-dom";

const ContactUs = () => {
  const [result, setResult] = useState('Send Message');
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');

    const formData = new FormData(event.target);
    formData.append('access_key', 'd25ed56c-06b1-422c-9b5d-692599f4c19c');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success('Form Submitted Successfully');
      setResult('Send Message');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult('Send Message');
      toast.error(data.message);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col mb-20 gap-10">
      {/* Full-width div at the top */}
      <div className="w-full h-[30vh] bg-gray-200 flex flex-col items-center justify-center">
        <p className="text-2xl font-bold pb-6">Contact Us</p>
        <div>
  <p className="text-xl flex items-center gap-1 justify-center">
    <NavLink to="/">
      <span>Home </span>
    </NavLink>
    <MdKeyboardDoubleArrowRight className="inline mt-1" />
     Contact
  </p>
</div>
      </div>

      {/* Main Content */}
      <div className="w-full flex-grow p-6 text-xl space-y-8">
        {/* First Section */}
        <div className="w-full flex flex-col md:flex-row gap-8">
          {/* Contact Info Div */}
          <div className="w-full md:w-1/2 space-y-4">
            <h1 className="text-3xl font-bold">Contact Us</h1>
            <div className="flex items-center space-x-4">
        <FaMapMarkerAlt className="h-6 w-6 text-gray-600" />
        <p className="text-gray-600">
          GJUS&T HISAR, HISAR, HARYANA, INDIA, 125001
        </p>
      </div>
           
      {/* Phone */}
      <div className="flex items-center space-x-4">
        <FaPhone className="h-6 w-6 text-gray-600" />
        <p className="text-gray-600">Phone: +91 8168584557</p>
      </div>

      {/* Open Hours */}
      <div className="flex items-center space-x-4">
        <FaClock className="h-6 w-6 text-gray-600" />
        <p className="text-gray-600">Open 24/7</p>
      </div>

      {/* Email */}
      <div className="flex items-center space-x-4">
        <FaEnvelope className="h-6 w-6 text-gray-600" />
        <p className="text-gray-600">Email: ajaygodara84557@gmail.com</p>
      </div>
          </div>

          {/* Google Map Div */}
          <div className="w-full md:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.366292038018!2d75.7014153153841!3d29.14988898215393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39123d9b8b3d4a9d%3A0x8f1c5c5b5b5b5b5b!2sGuru%20Jambheshwar%20University%20of%20Science%20and%20Technology%2C%20Hisar!5e0!3m2!1sen!2sin!4v1696861234567!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>

        {/* Second Section - Form */}
        <div className="w-full max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Chat with Us</h2>
          <form onSubmit={onSubmit} className="space-y-4">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-2 border rounded-lg"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-2 border rounded-lg"
              />
            </div>

            {/* Phone Input */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Your Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full p-2 border rounded-lg"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full p-2 border rounded-lg"
              ></textarea>
            </div>

            {/* Send Button */}
            <button
            type="submit"
            className={`text-center text-white cursor-pointer font-bold hover:bg-blue-600 bg-blue-500 w-full text-2xl py-2 rounded-md ${
              result === 'Sending....' ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={result === 'Sending....'}
          >
            {result}
          </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;