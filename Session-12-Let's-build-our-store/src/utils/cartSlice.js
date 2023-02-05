import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        clearItem: (state, action) => {
            state.items.pop() //! will update with splice
        },
        removeItem: (state) => {
            state.items = []
        }
    }
})

//^ export actions
export const { addItem, clearItem, removeItem } = cartSlice.actions;

//^ export reducers
export default cartSlice.reducer; //^ 'reducer' combines all the 'reducers' and pass it