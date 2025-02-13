import React from 'react'
import { X } from "lucide-react";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
function Cart({ toggleCardSlider, isCardSliderOpen }) {
    const [cartNo, setCartNo] = useState(0)

    return (
        <>
            <div className="relative">

                <div
                    className={`fixed top-0 right-0   bg-white   transition-transform duration-500 z-50 ${isCardSliderOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >

                    <div className='flex flex-col w-96 shadow-2xl  h-screen   '>

                        <div className=' flex w-full justify-between  h-fit'>
                            <div className='border-1 py-1 cursor-pointer px-2 '><X onClick={toggleCardSlider} size={28} /></div>
                            <div className='border-1 py-1 text-center font-bold w-full text-xl'><h2>Shoping Cart</h2></div>
                            <div className='border-1 py-1 px-2 text-2xl'>{cartNo}</div>
                        </div>
                        <div className='flex h-full flex-col gap-10 justify-center items-center'>
                            <div>
                                <h1 className='font-bold text-xl'>Your shopping bag is empty</h1>
                            </div>
                            <div>
                                <NavLink onClick={toggleCardSlider} to="/shop" className='border-2 rounded-md bg-red-300 cursor-pointer px-5 py-3 font-bold '>Go To The Shop</NavLink> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
