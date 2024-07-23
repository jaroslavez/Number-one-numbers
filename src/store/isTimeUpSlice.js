import { createSlice } from '@reduxjs/toolkit'

export const isTimeUpSlice = createSlice({
    name: "isTimeUp",
    initialState: false,
    reducers: {
        setIsTimeOut(state, action) {
            return action.payload;
        },
    }
});

export const {setIsTimeOut} = isTimeUpSlice.actions;

export default isTimeUpSlice.reducer;