import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentLevel: 1,
    trueLevel: 1,
}

export const levelSlice = createSlice({
    name: "level",
    initialState,
    reducers: {
        incrementLevel(state) {
            state.trueLevel += 1;
            state.currentLevel < 9 && state.currentLevel++;
        },
        incrementOnlyTrueLevel(state) {
            state.trueLevel += 1;
        },
        resetLevel() {
            return {
                currentLevel: 1,
                trueLevel: 1,
            };
        }
    }
});

export const {incrementLevel, incrementOnlyTrueLevel, resetLevel} = levelSlice.actions;

export default levelSlice.reducer;