import React from "react";

const ContactUs = () => {
  // Function to handle form submission (no email sending logic)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Log the data (for demonstration purposes)
    console.log("Form Data:", data);

    alert("Your message has been submitted!"); // Optional: Show a success message
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Full-width div at the top */}
      <div className="w-full h-[30vh] bg-gray-200 flex items-center justify-center">
        <p className="text-xl font-bold">Contact Us</p>
      </div>

      {/* Main Content */}
      <div className="w-full flex-grow p-6 space-y-8">
        {/* First Section */}
        <div className="w-full flex flex-col md:flex-row gap-8">
          {/* Contact Info Div */}
          <div className="w-full md:w-1/2 space-y-4">
            <h1 className="text-3xl font-bold">Contact Us</h1>
            <p className="text-gray-600">
              123 Main Street, City, State, ZIP Code
            </p>
            <p className="text-gray-600">Phone: +1 (123) 456-7890</p>
            <p className="text-gray-600">Open Hours: Mon - Fri, 9 AM - 5 PM</p>
            <p className="text-gray-600">Email: info@example.com</p>
          </div>

          {/* Google Map Div */}
          <div className="w-full md:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d144.95373531531664!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d2a6c5e4a5b1!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1622549402996!5m2!1sen!2sus"
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
          <form onSubmit={handleSubmit} className="space-y-4">
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
              className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;