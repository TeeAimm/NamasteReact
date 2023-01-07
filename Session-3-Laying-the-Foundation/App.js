import React from "react";
import ReactDOM from "react-dom/client";

import casperLogo from "./asset/image/Casper.png";

console.log("APP JS");

const logo = <img className="logo-style" src={casperLogo} />
const searchBar = <form className="form-inline my-2 my-lg-0">
<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
</form>

const HeaderComponent = () => {
  return (
    <div>
      {logo}
      {searchBar}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);

