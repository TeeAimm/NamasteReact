import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

//^ configureStore creates a store.
const store = configureStore({
    reducer: {
        cart: cartSlice
    }
})

export default store;