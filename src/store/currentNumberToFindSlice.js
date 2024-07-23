import { createSlice } from '@reduxjs/toolkit'

export const currentNumberToFindSlice = createSlice({
    name: "currentNumberToFind",
    initialState: null,
    reducers: {
        setCurrentNumberToFind(state, action) {
            return action.payload;
        },
    }
});

export const {setCurrentNumberToFind} = currentNumberToFindSlice.actions;

export default currentNumberToFindSlice.reducer;