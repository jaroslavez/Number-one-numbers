import { createSlice } from '@reduxjs/toolkit'

export const levelSlice = createSlice({
    name: "level",
    initialState: 1,
    reducers: {
        increment(state) {
            return state + 1;
        },
        reset() {
            return 1;
        }
    }
});

export const {increment, reset} = levelSlice.actions;

export default levelSlice.reducer;