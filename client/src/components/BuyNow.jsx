import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import toast from 'react-hot-toast';
import { handlePayment } from "../../utils/paymentService";  // ✅ Import payment function

export const BuyNow = () => {
    const location = useLocation();
    const { productName, price, prequantity } = location.state || {};
    const backend_url = import.meta.env.VITE_BACKEND_URI;

    const [address, setAddress] = useState("");
    const [country, setCountry] = useState("");
    const [quantity, setQuantity] = useState(prequantity || 1);
    const navigate = useNavigate();

    // ✅ Save Order After Payment
    const saveOrder = async (paymentStatus) => {
        try {
            const cartItems = [{
                name: productName,
                price: price,
                quantity: quantity,
                totalPrice: price * quantity,
            }];

            const res = await axios.post(`${backend_url}/api/shop/order`, {
                cartItems,
                address,
                country,
                paymentStatus,
            }, { withCredentials: true });

            navigate("/");
            toast.success(res.data.message);
        } catch (err) {
            toast.error("Failed to save order.");
        }
    };

    // ✅ Check fields before calling payment function
    const handleOrderClick = () => {
        if (!address.trim() || !country.trim()) {
            toast.error("Please enter your address and country before proceeding.");
            return;
        }

        handlePayment(
            { productName, price:price * quantity, address, country }, 
            backend_url, 
            saveOrder
        );
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold text-center mb-4">{productName}</h2>
                <p className="text-lg text-gray-600 text-center mb-4">Price: <span className="font-semibold">${price * quantity}</span></p>

                <div className="space-y-4">
                    {/* Quantity */}
                    <div>
                        <label className="block text-gray-700 font-medium">Quantity:</label>
                        <input
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block text-gray-700 font-medium">Address:</label>
                        <input
                            type="text"
                            placeholder="Enter Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Country */}
                    <div>
                        <label className="block text-gray-700 font-medium">Country:</label>
                        <input
                            type="text"
                            placeholder="Enter Country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Confirm Order Button */}
                    <button
                        onClick={handleOrderClick}
                        className="w-full bg-blue-600 text-white py-2 rounded-md text-lg font-semibold hover:bg-blue-700 cursor-pointer transition duration-200"
                    >
                        Pay & Confirm Order
                    </button>
                </div>
            </div>
        </div>
    );
};
