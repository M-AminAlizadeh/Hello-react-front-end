import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greetingSlice';
// import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

export default store;
