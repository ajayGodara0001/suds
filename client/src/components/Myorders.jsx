import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const UserOrders = () => {
    const [orders, setOrders] = useState([]);
    const backend_url = import.meta.env.VITE_BACKEND_URI;

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await axios.get(`${backend_url}/api/shop/order`, { withCredentials: true });
                setOrders(res.data.orders);
            } catch (error) {
                toast.error(error.response?.data?.message || "Failed to fetch orders");
            }
        };

        fetchOrders();
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <Link  className="text-xl fornt-bold self-start" to="/">Home</Link>
            <h1 className="text-3xl font-bold mb-6">Your Orders</h1>
            {orders.length === 0 ? (
                <p className="text-gray-600">No orders found.</p>
            ) : (
                <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
                    <ul className="divide-y divide-gray-200">
                        {orders.map((order) => (
                            <li key={order._id} className="py-4">
                                <div className="flex justify-between">
                                    <div>
                                        <p className="font-semibold">{order.product.name}</p>
                                        <p className="text-gray-600">Quantity: {order.product.quantity}</p>
                                        <p className="text-gray-600">Price: ${order.product.price}</p>
                                    </div>
                                    <div>
                                        <p className={`text-sm font-bold ${order.paymentStatus === "Paid" ? "text-green-600" : "text-red-600"}`}>
                                            {order.paymentStatus}
                                        </p>
                                        <p className="text-gray-500 text-sm">{new Date(order.createdAt).toLocaleString()}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default UserOrders;
