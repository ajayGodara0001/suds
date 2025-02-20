import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../../public/logo.png"
const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 px-5">
            <div className="container mx-auto">

                <div className="flex flex-col   gap-10  items-center ">

                    {/* Section 1: Logo & Social Media */}

                    <div className="flex flex-col gap-5 items-center">
                        <h2 className="text-2xl font-bold">
                             <NavLink to="/"> <img src={logo}  alt="Logo" className="w-auto h-10 " /></NavLink>
                        </h2>
                        <div className="flex gap-4  justify-center ">
                            <FaTwitter className="text-xl cursor-pointer" />
                            <FaInstagram className="text-xl cursor-pointer" />
                            <FaLinkedin className="text-xl cursor-pointer" />
                            <FaFacebook className="text-xl cursor-pointer" />
                        </div>
                    </div>

                    {/* Vertical line separator for large screens */}
                    <div className="  h-px w-50 m-auto block bg-white"></div>

                    {/* Section 2: Customer Care */}
                    <div className="flex flex-col gap-3 items-center"  >
                        <h3 className="text-lg font-semibold ">Customer Care</h3>
                        <ul className="space-y-2 flex flex-col items-center">
                            <li className="cursor-pointer hover:underline">Contact Us</li>
                            <li className="cursor-pointer hover:underline">About Us</li>
                        </ul>
                    </div>

                    {/* Vertical line separator */}
                    <div className=" h-px w-50 m-auto block bg-white"></div>


                    {/* Section 3: Quick Shop */}
                    <div className="flex flex-col gap-3 items-center "  >
                        <h3 className="text-lg font-semibold ">Quick Shop</h3>
                        <ul className="space-y-2 flex flex-col items-center">
                            <li className="cursor-pointer hover:underline">Spare Parts</li>
                            <li className="cursor-pointer hover:underline">Accessories</li>
                            <li className="cursor-pointer hover:underline">New Arrivals</li>
                        </ul>
                    </div>


                    {/* Vertical line separator */}
                    <div className=" h-px w-50 m-auto block bg-white"></div>


                    {/* Section 4: About Company Policies */}
                    <div className="flex flex-col gap-3 items-center" >
                        <h3 className="text-lg font-semibold ">About Company</h3>
                        <ul className="space-y-2 flex flex-col items-center">
                            <li className="cursor-pointer hover:underline">Privacy Policy</li>
                            <li className="cursor-pointer hover:underline">Shipping Policy</li>
                            <li className="cursor-pointer hover:underline">Terms & Conditions</li>
                            <li className="cursor-pointer hover:underline">Refund & Return Policy</li>
                            <li className="cursor-pointer hover:underline">Career</li>
                            <li className="cursor-pointer hover:underline">Blog</li>
                        </ul>
                    </div>


                </div>


            </div>

        </footer>
    );
};

export default Footer;
