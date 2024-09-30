import { configureStore } from '@reduxjs/toolkit'
import loginReducer from "./features/login/loginSlice"
import signUpReducer, { signup } from "./features/signup/signupSlice"

export const store = configureStore({
  reducer: {
    login:loginReducer,
  },

  reducer:{
    signup:signUpReducer
  }
})
