import React from 'react' 
import { useSelector, useDispatch } from 'react-redux' 
import CartItem from './cartItems.jsx';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const CartTab = ({ isCartSliderOpen, toggleCartSlider}) => {

   
    const carts = useSelector(store => store.cart.items);

    const navigate = useNavigate()

    const handleCheckoutbtn = () => {
       navigate("/cart/checkout")
    }
   
    const handleCloseTabCart = () => {
       toggleCartSlider()
    }


    // 🛑 Prevent scrolling when cart is open
    useEffect(() => {
        if (isCartSliderOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        
        // Cleanup function to reset scroll
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isCartSliderOpen]);
  return (
    <div className={`fixed z-40 top-0 right-0 bg-white shadow-2xl w-96 h-screen  grid grid-rows-[60px_1fr_60px] 
    transform transition-transform duration-500 
    ${isCartSliderOpen === false ? "translate-x-full" : ""}
    `}>
        <h2 className='p-5 text-white text-2xl'>Shopping Cart</h2>
        <div className='p-5 overflow-auto'>
                {carts.length > 0 ? (
                    carts.map((item, key) => <CartItem key={key} data={item} />)
                ) : (
                    <p className="flex items-center justify-center h-full text-gray-500">Your cart is empty.</p>
                )}
            </div>
       <div className='grid grid-cols-2 gap-3 bg-white'>
        <div onClick={handleCloseTabCart} className='bg-black text-white rounded-lg flex justify-center items-center text-xl cursor-pointer hover:scale-105'>
            Close
        </div>
        <div onClick={ () => {handleCheckoutbtn(), handleCloseTabCart()}} className='bg-black rounded-lg text-white flex justify-center items-center text-xl cursor-pointer hover:scale-105'>
            Check Out
        </div>
              
       </div>
    </div>
  )
}

export default CartTab