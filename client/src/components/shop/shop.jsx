import React from 'react'
import  { products } from "../../product.js"
import ProductCart from './shopproduct.jsx'
const Shop = () => {
  return (
    <div>
        <h1 className='text-3xl my-5 mx-10 font-bold'>All Products</h1>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mx-10 my-10'>
            {products.map((product, key) => 
                <ProductCart key={key} data={product}/>
            )}
        </div>
    </div>
  )
}

export default Shop