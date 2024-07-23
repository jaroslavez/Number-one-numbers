import { createSlice } from '@reduxjs/toolkit'

export const scoreSlice = createSlice({
    name: "score",
    initialState: 0,
    reducers: {
        addPoints(state, action) {
            return state + action.payload;
        },
        resetScore() {
            return 0;
        }
    }
});

export const {addPoints, resetScore} = scoreSlice.actions;

export default scoreSlice.reducer;