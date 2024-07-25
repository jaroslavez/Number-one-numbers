import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    accurate: 0,
    total: 0,
}

export const accurateAndTotalAnswersSlice = createSlice({
    name: "accurateAndTotalAnswers",
    initialState,
    reducers: {
        incrementAccurateAnswers(state) {
            state.accurate += 1;
            state.total += 1;
        },
        incrementonlyTotalAnswers(state) {
            state.total += 1;
        },
        resetAnswers() {
            return {
                accurate: 0,
                total: 0,
            };
        }
    }
});

export const {incrementAccurateAnswers, incrementonlyTotalAnswers, resetAnswers} = accurateAndTotalAnswersSlice.actions;

export default accurateAndTotalAnswersSlice.reducer;