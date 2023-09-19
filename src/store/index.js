import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './modules/example/exampleSlice';

const store = configureStore({
  reducer: {
    button: exampleReducer,
  },
});

export default store;
