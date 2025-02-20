import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from 'react-hot-toast';
import { useLocation } from "react-router-dom";

export const BuyNow = () => {
    const location = useLocation(); // ✅ Get current location
    const { productName, price } = location.state || {}; // ✅ Extract passed data


    const backend_url = import.meta.env.VITE_BACKEND_URI

    const [address, setAddress] = useState("");
    const [country, setCountry] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [paymentStatus, setPaymentStatus] = useState("Pending");
    const navigate = useNavigate();

    const handleBuyNow = async () => {

        await axios.post(`${backend_url}/api/shop/order`, {
            productName: productName,
            price: price*quantity,
            quantity,
            address,
            country,
            paymentStatus
        }, { withCredentials: true })
            .then((res) => {
                navigate("/")
                toast.success(res.data.message)
            })
            .catch((error) => {
                console.error("Error:", error.response?.data || error.message);

                toast.error(error.response?.data?.message || error.message);

            })

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold text-center mb-4">{productName}</h2>
                <p className="text-lg text-gray-600 text-center mb-4">Price: <span className="font-semibold">${price*quantity}</span></p>

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

                    {/* Payment Status */}
                    <div>
                        <label className="block text-gray-700 font-medium">Payment Status:</label>
                        <div className="flex items-center space-x-4 mt-2">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="Pending"
                                    checked={paymentStatus === "Pending"}
                                    onChange={() => setPaymentStatus("Pending")}
                                    className="w-5 h-5"
                                />
                                <span>Pending</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="Paid"
                                    checked={paymentStatus === "Paid"}
                                    onChange={() => setPaymentStatus("Paid")}
                                    className="w-5 h-5"
                                />
                                <span>Paid</span>
                            </label>
                        </div>
                    </div>

                    {/* Confirm Order Button */}
                    <button
                        onClick={() => handleBuyNow({ productName, price, quantity, address, country, paymentStatus })}
                        className="w-full bg-blue-600 text-white py-2 rounded-md text-lg font-semibold hover:bg-blue-700 cursor-pointer transition duration-200"
                    >
                        Confirm Order
                    </button>
                </div>
            </div>
        </div>
    );

};


