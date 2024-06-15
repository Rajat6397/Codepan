import { configureStore } from '@reduxjs/toolkit';
import myReducer from './reducers';

const store = configureStore({
  reducer: {
    home: myReducer,
  },
  devTools: true // Enable Redux DevTools Extension
});

export default store;