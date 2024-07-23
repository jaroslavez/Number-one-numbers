import { configureStore } from '@reduxjs/toolkit';

import levelReducer from './levelSlice';
import currentNumberToFindReducer from './currentNumberToFindSlice';
import isTimeUpReducer from './isTimeUpSlice';
import scoreReducer from './scoreSlice';
import currentWindowReducer from './currentWindowSlice';

export const store = configureStore({
  reducer: {
    level: levelReducer,
    currentNumberToFind: currentNumberToFindReducer,
    isTimeUp: isTimeUpReducer,
    score: scoreReducer,
    currentWindow: currentWindowReducer,
  },
})