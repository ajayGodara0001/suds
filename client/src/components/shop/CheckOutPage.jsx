import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { products } from "../../product.js"; // Import product details
import toast from 'react-hot-toast';

const CheckOutPage = () => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [address, setAddress] = useState("");
    const [country, setCountry] = useState("");
    const [paymentStatus, setPaymentStatus] = useState("Pending");

    // 🛒 Load Cart from Local Storage & Get Full Product Details
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("carts")) || [];
        
        // 🔍 Find full product details from products.js
        const detailedCart = storedCart.map(item => {
            const product = products.find(p => p.id === item.productId);
            return product ? { ...product, quantity: item.quantity,  totalPrice: product.price * item.quantity } : null;
            
        }).filter(item => item !== null);
      

        setCartItems(detailedCart);

        // Calculate Total Price
        const total = detailedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotalPrice(total);
    }, []);
    

    
    const backend_url = import.meta.env.VITE_BACKEND_URI
    // ✅ Handle Checkout (Send Order to Backend)

    const handleCheckout = async () => {
        if (!address || !country) {
            toast.error("Please enter address and country.");
            return;
        }


        try {
            await axios.post(`${backend_url}/api/shop/order`, {
                cartItems,
                address,
                country,
                paymentStatus
            }, { withCredentials: true });

            toast.success("Order placed successfully!");
            localStorage.removeItem("carts"); // Clear cart after checkout
            navigate("/"); // Redirect to Thank You page
            setTimeout(() => {
                window.location.reload();
            }, 500);
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
            toast.error(error.response?.data?.message ||  error.message);
        }
    };

    return (
      
            <div className="w-full flex flex-col md:flex-row h-fit p-5 gap-5 ">
                
                {/* 📌 Left: Checkout Form */}
                <div className="w-full md-[50%] order-2 md:order-1">
                    <h2 className="text-2xl font-bold mb-4">Checkout</h2>
                    
                    <label className="block text-gray-700 font-medium">Address:</label>
                    <input 
                        type="text" placeholder="Enter Address"
                        value={address} onChange={(e) => setAddress(e.target.value)}
                        className="w-full p-2 border rounded-md mb-4"
                    />

                    <label className="block text-gray-700 font-medium">Country:</label>
                    <input 
                        type="text" placeholder="Enter Country"
                        value={country} onChange={(e) => setCountry(e.target.value)}
                        className="w-full p-2 border rounded-md mb-4"
                    />

                    <label className="block text-gray-700 font-medium">Payment Status:</label>
                    <div className="flex items-center space-x-4 mb-4">
                        <label className="flex items-center space-x-2">
                            <input 
                                type="radio" name="payment" value="Pending" 
                                checked={paymentStatus === "Pending"} 
                                onChange={() => setPaymentStatus("Pending")}
                                className="w-5 h-5"
                            />
                            <span>Pending</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input 
                                type="radio" name="payment" value="Paid" 
                                checked={paymentStatus === "Paid"} 
                                onChange={() => setPaymentStatus("Paid")}
                                className="w-5 h-5"
                            />
                            <span>Paid</span>
                        </label>
                    </div>

                    <button 
                        onClick={handleCheckout}
                        className="w-full bg-blue-600 text-white py-2 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-200"
                    >
                        Confirm Order
                    </button>
                </div>

                {/* 📌 Right: Order Summary */}
                <div className="w-full md-[50%] order-1 md:order-2">
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                    <div className="space-y-3">
                        {cartItems.map((item, index) => (
                            <div key={index} className="flex justify-between items-center border-b pb-2">
                                <img src={item.image} alt={item.name} className="w-14 h-14 rounded-md object-cover" />
                                <div>
                                    <p className="font-medium">{item.name}</p>
                                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                                </div>
                                <span className="font-medium">${item.price * item.quantity}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 text-xl font-bold">
                        Total: ${totalPrice.toFixed(2)}
                    </div>
                </div>

           
        </div>
    );
};

export default CheckOutPage;
