import React from "react";

const BuyPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row p-6 gap-6">
      {/* First Div - Account, Delivery, Payment, and Address Form */}
      <div className="w-full md:w-1/2 h-fit space-y-6">
        {/* Account Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Account</h2>
          <p>ajaygodara84557@gmail.com</p>
          <p>ajaygodara84557@gmail.com</p>
          <button className="text-blue-500 hover:underline">Log out</button>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="news" />
            <label htmlFor="news" className="text-sm">
              Email me with news and offers
            </label>
          </div>
        </div>

        {/* Delivery Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Delivery</h2>
          <select className="w-full p-2 border rounded-lg">
            <option value="India">India</option>
          </select>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="First name (optional)"
              className="w-1/2 p-2 border rounded-lg"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-1/2 p-2 border rounded-lg"
            />
          </div>
          <input
            type="text"
            placeholder="Address"
            className="w-full p-2 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Apartment, suite, etc. (optional)"
            className="w-full p-2 border rounded-lg"
          />
          <input
            type="text"
            placeholder="City"
            className="w-full p-2 border rounded-lg"
          />
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="PIN code"
              className="w-1/2 p-2 border rounded-lg"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-1/2 p-2 border rounded-lg"
            />
          </div>
        </div>

        {/* Shipping Method Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Shipping Method</h2>
          <p>Enter your shipping address to view available shipping methods.</p>
        </div>

        {/* Payment Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Payment</h2>
          <p>All transactions are secure and encrypted.</p>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <input type="radio" id="razorpay" name="payment" />
              <label htmlFor="razorpay" className="text-sm">
                Razorpay Secure (UPI, Cards, Wallets, NetBanking)
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="radio" id="cod" name="payment" />
              <label htmlFor="cod" className="text-sm">
                Cash on Delivery (COD)
              </label>
            </div>
          </div>
        </div>

        {/* Billing Address Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Billing Address</h2>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <input type="radio" id="same" name="billing" />
              <label htmlFor="same" className="text-sm">
                Same as shipping address
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="radio" id="different" name="billing" />
              <label htmlFor="different" className="text-sm">
                Use a different billing address
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="radio" id="new" name="billing" />
              <label htmlFor="new" className="text-sm">
                Use a new address
              </label>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
          Submit
        </button>
      </div>

      {/* Second Div - Order Summary and Image */}
      <div className="w-full md:w-1/2 h-fit space-y-6">
        {/* Order Summary Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Happy</h2>
          <p>Quantity: 1</p>
          <p>Price: ₹599.00</p>
        </div>

        {/* Discount Code Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Discount Code or Gift Card</h2>
          <input
            type="text"
            placeholder="Discount code or gift card"
            className="w-full p-2 border rounded-lg"
          />
          <button className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Submit
          </button>
        </div>

        {/* Cost Summary Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Cost Summary</h2>
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>₹599.00</p>
          </div>
          <div className="flex justify-between">
            <p>Shipping</p>
            <p>Enter shipping address</p>
          </div>
          <div className="flex justify-between">
            <p>Total</p>
            <p>₹599.00</p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Placeholder"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default BuyPage;