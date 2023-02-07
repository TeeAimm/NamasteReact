import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import * as MainHeader from "./components/Header"; // named export
import MyBody from "./components/Body";  // default export
import { Footer as MyFooter } from "./components/Footer"; // named export 
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Help from "./components/Help";
//import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/ProfileClass";
import Shimmer from "./components/Shimmer";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./utils/store";
//import Instamart from "./components/Instamart";

// ^LAZY LOADING | CODE SPLITTING | CHUNKING | DYNAMIC BUNDLING 
const Cart = lazy(() => import("./components/Cart"))
const Instamart = lazy(() => import("./components/Instamart"))

console.log("___FOOD-DOM APP___");

const AppLayout = () => {
	const [user, setUser] = useState({})
	useEffect(() => {
		getUserInfo();
	}, [])

	const getUserInfo = async () => {
		const data = await fetch("https://api.github.com/users/TeeAimm");
		const dataJson = await data.json();
		const userData = {
			name: dataJson?.name,
			location: dataJson?.location
		}
		setUser(userData)
	}
	return (
		<Provider store={store}>
			<userContext.Provider value={{
				user: user,
				setUser: setUser
			}}
			>
				<MainHeader.Header />
				<Outlet />
				<MyFooter />
			</userContext.Provider>
		</Provider>
	)
};
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
				path: 'help',
				element: <Help />
			},
			{
				path: 'cart',
				element: <Suspense fallback={<Shimmer />}> <Cart /> </Suspense>  //^ Here Cart is being lazy loaded 
			},
			{
				path: 'restaurant/:resId',
				element: <RestaurantMenu />
			},
			{
				path: 'instamart',
				element: <Suspense fallback={<Shimmer />}><Instamart /></Suspense> //^ Here Instamart is being lazy loaded 
			}
		]
	}
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
