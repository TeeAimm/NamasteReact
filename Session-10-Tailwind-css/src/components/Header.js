import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => (
  <Link to='/'>
    <img
      className="logo"
      alt="Food-Dom logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbp0OxXzrRkjDtK3Ge6X6goSmhJL1MoDmXKg&usqp=CAU"
    />
  </Link>
);

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link to="about">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="contact">
              CONTACT
            </Link>
          </li>
          <li>
            <Link to="cart">
              CART
            </Link>
          </li>
        </ul>
      </div>
      {isLoggedIn ? <button onClick={() => { setIsLoggedIn(false) }}>Log Out</button> : <button onClick={() => { setIsLoggedIn(true) }}>Log In</button>}
    </div>
  );
};

//export default Header;