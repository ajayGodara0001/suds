import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    products: [
        {
            name: { type: String, required: true },
            price: { type: Number, required: true },
            quantity: { type: Number, required: true },
            totalprice: { type: Number, required: true }
        }
    ],
    address: { type: String, required: true },
    country: { type: String, required: true },
    paymentStatus: { type: String, enum: ["Pending", "Paid"], default: "Pending" },
    createdAt: { type: Date, default: Date.now }
});

const Order = mongoose.model("Order", orderSchema);

export default Order