import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartItem from './cartItems.jsx';

const CartTab = ({ isCartSliderOpen, toggleCartSlider }) => {
    const carts = useSelector(store => store.cart.items);
    const navigate = useNavigate();

    const handleCheckoutbtn = () => {
        navigate("/cart/checkout");
    };

    const handleCloseTabCart = () => {
        toggleCartSlider();
    };

    // Prevent scrolling on the main page when cart is open
    useEffect(() => {
        if (isCartSliderOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isCartSliderOpen]);

    return (
        <div
            style={{ top: "60px", height: "calc(100vh - 60px)" }} // Offset for navbar
            className={`fixed z-40 right-0 bg-white shadow-2xl w-96 flex flex-col 
                transform transition-transform duration-500 
                ${isCartSliderOpen ? "" : "translate-x-full"}`}
        >
            {/* Header */}
            <h2 className='p-5 bg-black text-white text-2xl'>Shopping Cart</h2>

            {/* Cart Items List */}
            <div className='p-5 flex-1 overflow-auto'>
                {carts.length > 0 ? (
                    carts.map((item, key) => <CartItem key={key} data={item} />)
                ) : (
                    <p className="text-center text-gray-500">Your cart is empty.</p>
                )}
            </div>

            {/* Footer Buttons (with margin-bottom to keep them above the bottom edge) */}
            <div className='p-3 bg-white border-t border-gray-300 flex gap-3 mb-4'>
                <button
                    onClick={handleCloseTabCart}
                    className='w-1/2 bg-black text-white rounded-lg py-3 text-xl cursor-pointer hover:scale-105'
                >
                    Close
                </button>
                <button
                    onClick={() => {
                        handleCheckoutbtn();
                        handleCloseTabCart();
                    }}
                    className='w-1/2 bg-black text-white rounded-lg py-3 text-xl cursor-pointer hover:scale-105'
                >
                    Check Out
                </button>
            </div>
        </div>
    );
};

export default CartTab;
