import React from 'react' 
import { useSelector, useDispatch } from 'react-redux' 
import CartItem from './cartItems.jsx';
import { useNavigate } from 'react-router-dom';


const CartTab = ({ isCartSliderOpen, toggleCartSlider}) => {

   
    const carts = useSelector(store => store.cart.items);

    const navigate = useNavigate()

    const handleCheckoutbtn = () => {
       navigate("/cart/checkout")
    }
   
    const handleCloseTabCart = () => {
       toggleCartSlider()
    }
  return (
    <div className={`fixed top-0 right-0 bg-white shadow-2xl w-96 h-fit grid grid-rows-[60px_1fr_60px] 
    transform transition-transform duration-500 
    ${isCartSliderOpen === false ? "translate-x-full" : ""}
    `}>
        <h2 className='p-5 text-white text-2xl'>Shopping Cart</h2>
        <div className='p-5'>
            {carts.map((item, key) => 
                <CartItem key={key} data={item}/>
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