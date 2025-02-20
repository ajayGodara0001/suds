import React from 'react'
import second from "../../public/second.png"
import third from "../../public/third1.png"
import fourth from "../../public/fourth.png"
import ProductCart from './shop/shopproduct.jsx'

import { products } from '../product.js'
import BlixLibrary from './library.jsx'
import { useNavigate } from 'react-router-dom'
function FirstPage() {
  const navigate = useNavigate()

  const first = "https://res.cloudinary.com/db7tda7yp/image/upload/v1739881713/picofkit_hptha8.png"
  return (
    <>
      <div className='border-2 overflow-hidden px-2 py-5 flex flex-col gap-10 justify-center items-center'>


        <div className="w-screen lg:h-[70vh] md:h-[80vh] h-[60vh]">
          <img
            className="w-full h-full object-contain"
            src={first}
            alt="first_Img"
          />
        </div>


        <div className="w-screen h-fit  flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="w-full md:w-[50%] h-[50vh] md:h-full">
            <img className="w-full h-full object-contain" src={second} alt="second_img" />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-[50%] p-4">
            <h1 className="text-2xl font-bold">Experience Learning Through Play</h1>
            <p className="mt-2 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsa neque
              debitis minima deserunt id laboriosam nulla delectus, ut nisi ab officiis
              ea aut error ad maxime soluta doloremque dicta. <br />
              Id ex sapiente natus saepe ipsum obcaecati aperiam temporibus illo
              officiis magni, fugiat necessitatibus molestias officia repellendus,
              veritatis sed provident nulla! Harum provident ullam corrupti, at quos
              alias distinctio nesciunt. Cumque, sed. Natus voluptates architecto neque
              tenetur, sequi minima, enim temporibus rem? Possimus itaque quis
              architecto voluptates hic minus ab officia!
            </p>
          </div>
        </div>


        <div>
          <h1 className='text-3xl my-5'>List Products</h1>
          <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
            {products.map((product, key) =>
              <ProductCart key={key} data={product} />
            )}
          </div>
        </div>


        <div className="flex flex-col md:flex-row w-full h-fit items-center p-4">
          {/* Image Section */}
          <div className="w-full md:w-[50%] h-[40%] md:h-full flex justify-center items-center">
            <img className="w-full h-full object-contain" src={fourth} alt="fourth_img" />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-[50%] flex flex-col  p-4">
            <div>
              <p className="text-lg font-semibold text-gray-600">Happy Clients</p>
              <h1 className="text-3xl font-bold">What Parents Say</h1>
            </div>
            <p className="mt-2 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aliquam, aliquid ex nobis aut laborum? Amet
              eligendi, quam aliquid, sequi voluptatem ipsa enim obcaecati commodi sed consequatur ad, nisi aperiam. Quis itaque
              dicta delectus esse totam dolorum ratione, beatae maxime. Molestiae cum repellat fuga iusto perferendis
              doloremque. Nam, voluptate facilis nesciunt in, eum nemo atque quam dolore nostrum similique cum.
            </p>
          </div>
        </div>



        <BlixLibrary />

      </div>
    </>
  )
}

export default FirstPage
