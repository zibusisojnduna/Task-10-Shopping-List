
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './features/login/loginSlice';
import signUpReducer from "./features/signup/signupSlice"

const store = configureStore({
  reducer: {
    login: loginReducer,
    signup:signUpReducer,
  },
});

export default store;
