import { createSlice } from '@reduxjs/toolkit'

export const WINDOWS = {
    countdown: 0,
    game: 1,
    report: 2,
}

export const currentWindowSlice = createSlice({
    name: "currentWindow",
    initialState: WINDOWS.countdown,
    reducers: {
        setCurrentWindow(state, action) {
            return action.payload;
        },
    }
});

export const {setCurrentWindow} = currentWindowSlice.actions;

export default currentWindowSlice.reducer;