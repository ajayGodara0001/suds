// ProductDetails.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProductDetails = () => {
const navigate = useNavigate()
  const buyhandle = () => {
    navigate("/Buy")
  }
  const location = useLocation();
  const { image, title, description } = location.state || {};

  return (
    <div className="w-full min-h-screen flex flex-col p-4 space-y-6">
      {/* First Section */}
      <div className="w-full h-[70vh] flex flex-col md:flex-row gap-6">
        {/* Image Div */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Info Div */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col  p-4 space-y-4">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-lg text-gray-600">{description}</p>
          <div className="flex items-center space-x-4">
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="w-20 p-2 border rounded-lg"
            />
            <button className="bg-blue-500 cursor-pointer text-white px-6 py-2 rounded-lg">
              Add to Cart
            </button>
            <button  onClick={buyhandle} className="bg-green-500 text-white cursor-pointer px-6 py-2 rounded-lg">
              Buy Now
            </button>
          </div>
          <p className="text-xl font-semibold">Price: $99.99</p>
        </div>
      </div>

      {/* Second Section - Description Box */}
      <div className="w-full p-6 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Product Description</h2>
        <p className="text-gray-700">
          This is a detailed description of the product. It includes all the
          features, specifications, and benefits of the product.
        </p>
      </div>

      {/* Third Section - Video Link */}
      <div className="w-full p-6 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Product Video</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Product Video"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;