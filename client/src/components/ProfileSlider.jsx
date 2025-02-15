import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { isAuthenticated } from "../auth/auth";

const ProfilePage = ({ isProfileSlider, toggleProfileSlider }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("sudsUser");
        toggleProfileSlider()
        navigate("/");
        toast.success("Logout successfully")
    };

    const user = isAuthenticated()

    return (

        <div className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-6 transform transition-transform flex flex-col justify-start duration-300 mt-16 ${isProfileSlider ? "translate-x-0" : "translate-x-full"}`}>
           <div>
           <div className="flex justify-between  mb-4 items center">
                <h2 className="text-2xl font-semibold ">Profile</h2>
                <button onClick={toggleProfileSlider} className="hover:scale-125 text-gray-600">✖</button>
            </div>
            <p className="p-2  rounded"><strong>Name:</strong> {user?.name || "Guest"}</p>
            <p className="p-2 rounded"><strong>Email:</strong> {user?.email || "Not Provided"}</p>
            
           </div>
           <div>
           <button
                onClick={handleLogout}
                className="mt-6 w-full px-4 py-2 cursor-pointer bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
                Sign Out
            </button>
            <button
                onClick={() => { navigate("/shop"); toggleProfileSlider() }}
                className="mt-2 w-full px-4 py-2 cursor-pointer bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
                Go to Shop
            </button>
           </div>
        </div>
    )
}

export default ProfilePage;