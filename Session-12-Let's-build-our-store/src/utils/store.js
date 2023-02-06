import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import restaurantSlice from "./restaurantSlice";

//^ configureStore creates a store.
const store = configureStore({
    reducer: {
        cart: cartSlice,
        restaurant: restaurantSlice
    }
})

export default store;