
import fifth from "../../public/fifth.png"
import fourth from "../../public/fourth.png"
const images = [fifth , fourth, fifth , fourth, fifth,];

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation"; // Import Swiper navigation styles
import { ChevronLeft, ChevronRight } from "lucide-react"; // Icons for arrows


export default function BlixLibrary() {
  return (
    <div className="flex   flex-col items-center text-center w-full m-10 h-fit p-6">
      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Blix Online Library</h1>
      </div>

      {/* Swiper Container with Navigation Buttons Outside */}
      <div className="relative w-full md:w-[70vw] h-[50vh] flex items-center">
        {/* Left Arrow (Outside Slider) */}
        <button className="swiper-button-prev absolute left-[-50px] md:left-[-60px] z-10 p-3 bg-gray-800 text-white rounded-full shadow-md opacity-70 hover:opacity-100">
          <ChevronLeft size={28} />
        </button>

        {/* Swiper Image Slider */}
        <Swiper
          spaceBetween={30} // Space between images
          slidesPerView={1} // 1 image on small screens
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 40 }, // 2 images on md+ screens
          }}
          loop={true}
          autoplay={{ delay: 2000 }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
          className="w-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img className="w-full h-full object-contain rounded-lg" src={img} alt="slider_img" />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right Arrow (Outside Slider) */}
        <button className="swiper-button-next absolute right-[-50px] md:right-[-60px] z-10 p-3 bg-gray-800 text-white rounded-full shadow-md opacity-70 hover:opacity-100">
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
  );
}

