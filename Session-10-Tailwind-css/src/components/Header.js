import { useState } from "react";
import { Link } from "react-router-dom";
import { BiHomeSmile, BiInfoCircle, BiMailSend, BiCartAlt, BiLogInCircle, BiLogOutCircle } from "react-icons/bi";

const Title = () => (
  <Link to='/'>
    <img
      className="h-20 hover:scale-x-110 hover:animate-spin"
      alt="Food-Dom logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbp0OxXzrRkjDtK3Ge6X6goSmhJL1MoDmXKg&usqp=CAU"
    />
  </Link>
);

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className="flex justify-between items-center shadow mb-4">
      <Title />
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
        <li className="px-4 font-semibold hover:text-[#fc8019]">
          <Link to="contact" className="flex items-center">
            <span><BiMailSend /></span>
            <span className="pl-1">Contact</span>
          </Link>
        </li>
        <li className="px-4 font-semibold hover:text-[#fc8019]">
          <Link to="cart" className="flex items-center">
            <span><BiCartAlt /></span>
            <span className="pl-1">Cart</span>
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