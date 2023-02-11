import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { BiHomeSmile, BiInfoCircle, BiCartAlt, BiLogInCircle, BiLogOutCircle, BiShoppingBag } from "react-icons/bi";
import { IoIosHelpBuoy } from "react-icons/io";
import userContext from "../utils/userContext";
import useOnline from "../utils/useOnline";
import { RiEmotionLine, RiWifiOffLine } from "react-icons/ri";
import { useSelector } from "react-redux";


const Title = () => (
    <Link to='/'>
        <img
            data-testid="logo"
            className="h-20 hover:scale-x-110 hover:animate-spin"
            alt="Food-Dom logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbp0OxXzrRkjDtK3Ge6X6goSmhJL1MoDmXKg&usqp=CAU"
        />
    </Link>
);

export const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const { user } = useContext(userContext);
    const isOnline = useOnline();
    const cartItems = useSelector(store => store.cart.items)
    const onlineIcon = isOnline ? <RiEmotionLine data-testid="online-status-icon"  className="text-green-600" /> : <RiWifiOffLine />

    return (
        <div className="flex justify-between items-center shadow">
            <Title />
            {isLoggedIn ?
                <div className="flex items-center">
                    <span >{onlineIcon}</span>&nbsp;&nbsp;Hello
                    <div className="pl-2">
                        {user?.name}
                    </div>
                </div> : <div>Please login!!</div>
            }
            <ul className="flex">
                <li className="px-4 font-semibold hover:text-[#fc8019]">
                    <Link to="/" className="flex items-center">
                        <span><BiHomeSmile /></span>
                        <span className="pl-1">Home</span>
                    </Link>
                </li>
                <li className="px-4 font-semibold hover:text-[#fc8019]">
                    <Link to="about" className="flex items-center">
                        <span><BiInfoCircle /></span>
                        <span className="pl-1">About</span>
                    </Link>
                </li>
                {/* <li className="px-4 font-semibold hover:text-[#fc8019]">
          <Link to="contact" className="flex items-center">
            <span><BiMailSend /></span>
            <span className="pl-1">Contact</span>
          </Link>
        </li> */}
                <li className="px-4 font-semibold hover:text-[#fc8019]">
                    <Link to="instamart" className="flex items-center">
                        <span><BiShoppingBag /></span>
                        <span className="pl-1">Instamart</span>
                    </Link>
                </li>
                <li className="px-4 font-semibold hover:text-[#fc8019]">
                    <Link to="help" className="flex items-center">
                        <span><IoIosHelpBuoy /></span>
                        <span className="pl-1">Help</span>
                    </Link>
                </li>
                <li className="px-4 font-semibold hover:text-[#fc8019]">
                    <Link to="cart" className="flex items-center">
                        <span><BiCartAlt /></span>
                        <span className="pl-1" data-testid="cart">Cart - {cartItems?.length}</span>
                    </Link>
                </li>
                <li className="px-4 font-semibold hover:text-[#fc8019]">
                    {isLoggedIn ? (
                        <button className="flex items-center" onClick={() => { setIsLoggedIn(false) }}>
                            <span><BiLogOutCircle /></span>
                            <span className="pl-1">Log Out</span>
                        </button>) : (
                        <button className="flex items-center" onClick={() => { setIsLoggedIn(true) }}>
                            <span><BiLogInCircle /></span>
                            <span className="pl-1">Log In</span>
                        </button>)}
                </li>
            </ul>
        </div>
    );
};

//export default Header;