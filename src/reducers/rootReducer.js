import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: "Alpha Lau",
    isDarkMode: false,
    loading: true
};

export const rootSlice = createSlice({
    name: 'root',
    initialState: {
        name: "Alpha Lau",
        isDarkMode: false,
        loading: true
    },
    reducers: {
        changeName: (state, action) => {
            state.name = action.name;
        },
        toggleDarkMode: (state) => {
            state.isDarkMode = !state.isDarkMode;
        },
        toggleLoading: (state, action) => {
            state.loading = action.loading;
        },
    },
})

export const { changeName, toggleDarkMode, toggleLoading } = rootSlice.actions;

export default rootSlice.reducer;