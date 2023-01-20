import React from "react";
import ReactDOM from "react-dom/client";
import * as MainHeader from "./components/Header"; // named export
import MyBody from "./components/Body";  // default export
import { Footer as MyFooter } from "./components/Footer"; // named export 
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";

console.log("___FOOD-DOM APP___");

const AppLayout = () => (
  <>
    <MainHeader.Header />
    {/*   <MyBody /> */}
    <Outlet />
    <MyFooter />
  </>
);
const appRoute = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <MyBody />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'restaurant/:resId',
        element: <RestaurantMenu />
      }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
