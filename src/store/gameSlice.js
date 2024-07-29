import { createSlice } from '@reduxjs/toolkit';

export const WINDOWS = {
    hint: 0,
    countdown: 1,
    game: 2,
    report: 3,
}

const initialState = {
    currentLevel: 1,
    trueLevel: 1,
    accurateAnswers: 0,
    totalAnswers: 0,
    bonus: 1,
    currentNumberToFind: null,
    currentWindow: WINDOWS.hint,
    isTimeUp: false,
    score: 0,
}

export const gameSlice = createSlice({
    name: "game",
    initialState : structuredClone(initialState),
    reducers: {
        incrementLevel(state) {
            state.trueLevel += 1;
            state.currentLevel < 9 && state.currentLevel++;
        },
        decrementLevel(state) {
            state.trueLevel += 1;
            state.currentLevel > 1 && state.currentLevel--;
        },
        incrementAccurateAnswers(state) {
            state.accurateAnswers += 1;
            state.totalAnswers += 1;
            console.log(`increment! Total: ${state.totalAnswers}; Accurate: ${state.accurateAnswers}`);
        },
        incrementonlyTotalAnswers(state) {
            state.totalAnswers += 1;
            console.log(`incrementOnly! Total: ${state.totalAnswers}; Accurate: ${state.accurateAnswers}`);
        },
        incrementBonus(state) {
            state.bonus < 5 ? state.bonus++ : state.bonus;
        },
        decrementBonus(state) {
           state.bonus > 1 ? state.bonus-- : state.bonus;
        },
        setCurrentNumberToFind(state, action) {
            state.currentNumberToFind = action.payload;
        },
        setCurrentWindow(state, action) {
            state.currentWindow = action.payload;
        },
        setIsTimeOut(state, action) {
            state.isTimeUp = action.payload;
        },
        addPoints(state, action) {
            state.score += action.payload;
        },
        reset() {
            return initialState;
        }
    }
});

export const {
    incrementLevel, 
    decrementLevel, 
    incrementAccurateAnswers, 
    incrementonlyTotalAnswers,
    incrementBonus,
    decrementBonus,
    setCurrentNumberToFind,
    setCurrentWindow,
    setIsTimeOut,
    addPoints,
    reset,
} = gameSlice.actions;

export default gameSlice.reducer;