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
            state.isMenuOpen = false
        },
        notOnWatchPage: (state) => {
            state.isWatchPageOpen = false
        },
        onYTLogoClick: (state) => {
            state.isMenuOpen = true
        }
    }
})

export const { toggleMenu, onWatchPage, notOnWatchPage, onYTLogoClick } = appSlice.actions;
export default appSlice.reducer;