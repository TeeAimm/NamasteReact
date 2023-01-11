import React from "react";
import ReactDOM from "react-dom/client";
import * as MainHeader from "./components/Header"; // named export
import MyBody from "./components/Body";  // default export
import {Footer as MyFooter} from "./components/Footer"; // named export 

console.log("Food-Dom App");

const AppLayout = () => (
  <>
    <MainHeader.Header/>
    <MyBody />
    <MyFooter />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
