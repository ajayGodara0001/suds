import axios from "axios";
import toast from "react-hot-toast";

const loadRazorpay = async () => {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
    });
};

export const handlePayment = async (orderDetails, backend_url, saveOrder) => {
    const { productName, price, quantity, address, country } = orderDetails;

    const res = await loadRazorpay();
    if (!res) {
        toast.error("Failed to load Razorpay SDK.");
        return;
    }
    

    try {
        // ✅ Create Order in Razorpay
        const { data } = await axios.post(`${backend_url}/api/pay/create-order`, {
            amount: price * 100, // Convert to paise
            currency: "INR",
        },{ withCredentials: true });

        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID, // ✅ Replace with your Razorpay Key
            amount: data.order.amount,
            currency: data.order.currency,
            name: "suds",
            description: "Test Transaction",
            order_id: data.order.id,
            handler: async function (response) {
                try {
                    // ✅ Verify Payment
                    const verifyRes = await axios.post(`${backend_url}/api/pay/verify-payment`, response, { withCredentials: true });

                    if (verifyRes.data.success) {
                        toast.success("Payment Successful! Order Placed.");
                        await saveOrder("Paid"); // Save order with "Paid" status
                    } else {
                        toast.error("Payment Verification Failed!");
                    }
                } catch (err) {
                    toast.error("Error verifying payment.");
                }
            },
            prefill: {
                name: "John Doe",
                email: "johndoe@example.com",
                contact: "9876543210",
            },
            theme: { color: "#3399cc" },
            modal: {
                escape: false,
                ondismiss: function () {
                    toast.error("Payment Cancelled.");
                }
            }
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    } catch (error) {
        console.error("Error:", error.response?.data || error.message);
        toast.error(error.response?.data?.message ||  error.message);
        
    }
};
