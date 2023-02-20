import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isMenuOpen: true,
        isWatchPageOpen: false
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen
        },
        onWatchPage: (state) => {
            state.isWatchPageOpen = true
        },
        notOnWatchPage: (state) => {
            state.isWatchPageOpen = false
        }
    }
})

export const { toggleMenu, onWatchPage, notOnWatchPage } = appSlice.actions;
export default appSlice.reducer;