// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import loginSlice from "./features/login/loginSlice"

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export default store;
