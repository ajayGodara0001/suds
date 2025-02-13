
import { X } from "lucide-react";

export default function SliderSearch({toggleSearchSlider, isSearchSliderOpen}) {

  return (
    
        <div className="relative">
    
          {/* Sliding Search Bar */}
          <div
            className={` fixed top-0 left-0 w-full bg-white shadow-md p-4 transition-transform duration-300 z-50 ${
              isSearchSliderOpen ? "translate-y-0" : "-translate-y-full z-40"
            }`}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Search Anything</h2>
              
               <X onClick={toggleSearchSlider}  className="text-gray-600 text-xl"  size={28}/>
              
            </div>
            
            <div className="mt-4 flex">
              <input
                type="text"
                placeholder="Type here..."
                className="border border-gray-300 p-2 flex-grow rounded-l-md"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md">
                Search
              </button>
            </div>
          </div>
        </div>
      );
    };


