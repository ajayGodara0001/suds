import React from 'react' 
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../store/cart';
import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const ProductCart = (props) => {
    const carts = useSelector(store => store.cart.items);
    const {id, name, price, image, slug} = props.data;
      const navigate = useNavigate()
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: id,
            quantity: 1
        }));
    }
    const productName = name;
    const handleBuyNow = () =>{
        navigate("/buynow", { state: { productName, price } });
    }
    return (
    <div className='bg-white p-5 rounded-xl shadow-sm  transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_0_rgba(59,130,246,0.5)] hover:-rotate-1 hover:translate-y-2 hover:border-2 hover:border-blue-500'>
        <Link to={slug} className='z-0'>
            <img src={image} alt='' className='w-full  h-80 object-cover object-top drop-shadow-[0_80px_30px_#0007]' />
        </Link>
        <h3 className='text-2xl py-3 text-center font-medium'>{name}</h3>
        <div className='flex justify-between items-center'>
            <p>
                $<span className='text-2xl font-medium'>{price}</span>
            </p>
            <button className='bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2' onClick={handleAddToCart}>
                {/* <img src={iconCart} alt="" className='w-5'/> */}
            <ShoppingCart size={24}  className="cursor-pointer w-5" />
                Add To Cart
            </button>
            <button className='bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2 cursor-pointer' onClick={handleBuyNow}>
                Buy Now
            </button>
        </div>
    </div>
  )
}

export default ProductCart