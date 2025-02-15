import React from 'react'
import first from "../../public/first.png"
import second from "../../public/second.png"
import third from "../../public/third1.png"
import fourth from "../../public/fourth.png"
import BlixLibrary from './library.jsx'
function FirstPage() {
  return (
    <>
      <div className='border-2 overflow-hidden px-2 py-5 flex flex-col gap-10 justify-center items-center'>


        <div className='w-screen bg-amber-500 lg:h-[70vh] md:h-[80vh] h-[60vh]'>
          <img
            className='w-[100%] h-full  '
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

        <div className="flex flex-col items-center justify-center text-center  w-full h-[80vh] md:h-[60vh] p-4">
          {/* Text Section */}
          <div>
            <h1 className="text-3xl font-bold">New Launch</h1>
            <p className="text-lg text-gray-600">Check out our new launch!!</p>
          </div>

          {/* Image Section */}
          <div className="w-full h-[60%] md:w-[50%] md:h-[60%] flex justify-center items-center mt-4">
            <img className="w-full h-full object-contain" src={third} alt="third_img" />
          </div>

          {/* Product Info */}
          <div>
            <h3 className="font-bold">BLIX MARBLE RUN 2</h3>
            <p className="text-lg text-gray-600">Rs. 1,999.00</p>
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
