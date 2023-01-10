const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="Food-Dom logo"
      src="https://www.clipartmax.com/png/middle/112-1129793_healthy-food-logo-png.png"
    />
  </a>
);

const Header = () => {
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
    </div>
  );
};

export default Header;