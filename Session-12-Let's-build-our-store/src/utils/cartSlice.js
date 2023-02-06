import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        restaurantDetail: {}
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        clearItem: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload)
            state.items.splice(index,1)
        },
        removeItem: (state) => {
            state.items = []
        },
        setRestaurantDetails: (state, action) => {
            state.restaurantDetail = action.payload
        }
    }
})

//^ export actions
export const { addItem, clearItem, removeItem, setRestaurantDetails } = cartSlice.actions;

//^ export reducers
export default cartSlice.reducer; //^ 'reducer' combines all the 'reducers' and pass it