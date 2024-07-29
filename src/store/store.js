import { configureStore } from '@reduxjs/toolkit';

// import levelReducer from './levelSlice';
// import currentNumberToFindReducer from './currentNumberToFindSlice';
// import isTimeUpReducer from './isTimeUpSlice';
// import scoreReducer from './scoreSlice';
// import currentWindowReducer from './currentWindowSlice';
// import bonusReducer from './bonusSlice';
// import accurateAndTotalAnswersReducer from './accurateAndTotalAnswersSlice';

import gameReducer from './gameSlice';

export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
})