import { combineReducers } from '@reduxjs/toolkit';
import exampleReducer from './example/exampleSlice';

const rootReducer = combineReducers({
  example: exampleReducer,
});

export default rootReducer;
