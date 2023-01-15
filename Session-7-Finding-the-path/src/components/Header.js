import { useState } from "react";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="Food-Dom logo"
      src="https://www.clipartmax.com/png/middle/112-1129793_healthy-food-logo-png.png"
    />
  </a>
);

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
          <li>CART</li>
        </ul>
      </div>
      {isLoggedIn ? <button onClick={()=>{setIsLoggedIn(false)}}>Log Out</button> : <button onClick={()=>{setIsLoggedIn(true)}}>Log In</button>}
    </div>
  );
};

//export default Header;