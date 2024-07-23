import { createSlice } from '@reduxjs/toolkit'

export const levelSlice = createSlice({
    name: "level",
    initialState: 1,
    reducers: {
        incrementLevel(state) {
            return state + 1;
        },
        resetLevel() {
            return 1;
        }
    }
});

export const {incrementLevel, resetLevel} = levelSlice.actions;

export default levelSlice.reducer;