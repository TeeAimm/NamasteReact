import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState: {
        currentRestaurant: {}
    },
    reducers: {
        setCurrentRestaurant: (state,action) => {
            state.currentRestaurant = action.payload;
        }
    }
})

export const {setCurrentRestaurant} = restaurantSlice.actions;
export default restaurantSlice.reducer;