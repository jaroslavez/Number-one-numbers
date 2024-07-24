import { createSlice } from '@reduxjs/toolkit';

export const bonusSlice = createSlice({
    name: "bonus",
    initialState: 1,
    reducers: {
        incrementBonus(state) {
            return (state < 5 ? state + 1 : state);
        },
        resetBonus() {
            return 1;
        }
    }
});

export const {incrementBonus, resetBonus} = bonusSlice.actions;

export default bonusSlice.reducer;