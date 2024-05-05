// contains code for creating reducer 

import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from '../Qualities/JobQualities';

export const store = configureStore({
  reducer: {
    jobs: jobsReducer
    
  },
});
