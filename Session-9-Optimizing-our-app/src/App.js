import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import * as MainHeader from "./components/Header"; // named export
import MyBody from "./components/Body";  // default export
import { Footer as MyFooter } from "./components/Footer"; // named export 
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
//import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/ProfileClass";
import Shimmer from "./components/Shimmer";


// ^LAZY LOADING | CODE SPLITTING | CHUNKING | DYNAMIC BUNDLING 
const Cart = lazy(() => import("./components/Cart"))

console.log("___FOOD-DOM APP___");

const AppLayout = () => (
  <>
    <MainHeader.Header />
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
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />
          }
        ]
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'cart',
        element: <Suspense fallback={<Shimmer/>}> <Cart /> </Suspense>  //^ Here Cart is being lazy loaded 
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
