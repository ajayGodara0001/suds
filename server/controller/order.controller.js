import Order from "../models/order.model.js";

// 🛒 Create Order (Buy Now)
export const createOrder = async (req, res) => {
    try {
         // ✅ Extract data from req.body
         const { cartItems, address, country, paymentStatus } = req.body;

         // ✅ Check if all required fields are present
         if (!cartItems || cartItems.length === 0 || !address || !country || !paymentStatus) {
             return res.status(400).json({ message: "All fields are required" });
         }
 
         if (paymentStatus === "Pending") {
             return res.status(400).json({ message: "Please pay before placing the order" });
         }

         const productsArray = cartItems.map(item => ({
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            totalprice:item.totalPrice
        }));

          // ✅ Save order
        const order = new Order({
            userId: req.userId,
            products: productsArray,  // Save products here
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


      

        const formattedOrders = orders.map(order => ({
            orderId: order._id,
            products: order.products,  
            totalAmount: order.products.reduce((total, p) => total + p.price * p.quantity, 0),
            address: order.address,
            country: order.country,
            paymentStatus: order.paymentStatus,
            createdAt: order.createdAt
        }));

      
        

        res.status(200).json({  orders: formattedOrders });
    } catch (error) {
        console.error("Error fetching user orders:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
