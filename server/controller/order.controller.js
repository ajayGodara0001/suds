import Order from "../models/order.model.js";

// 🛒 Create Order (Buy Now)
export const createOrder = async (req, res) => {
    try {
         // ✅ Extract data from req.body
         const { productName, price, quantity, address, country, paymentStatus } = req.body;
        if (!productName || !price || !quantity || !address || !country || !paymentStatus) {
            return res.status(400).json({ message: "All fields are required" });
        }
       
        if (paymentStatus === "Pending") {
            return res.status(400).json({ message: "please pay before place order" });
        }
       

        const order = new Order({
            userId: req.userId,
            product: {  name: productName, price, quantity },
            address,
            country,
            paymentStatus
        });

        await order.save();
        res.status(201).json({ message: "Order placed successfully", order });
    } catch (error) {
        res.status(500).json({ message: "Server error ", error:error.message });
    }
};


// 🛒 Get User Orders
export const getUserOrders = async (req, res) => {
    try {
        const userId = req.userId; // Assuming authentication middleware sets this

        if (!userId) {
            return res.status(401).json({ message: "Unauthorized request" });
        }

        const orders = await Order.find({ userId }).sort({ createdAt: -1 }); // Sort by latest orders

        res.status(200).json({ orders });
    } catch (error) {
        console.error("Error fetching user orders:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
