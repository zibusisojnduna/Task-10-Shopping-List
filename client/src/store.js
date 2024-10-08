
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './features/login/loginSlice';
import signUpReducer from "./features/signup/signupSlice"
import shoppingListReducer from "./features/shoppinglist/shoppingListSlice"
const store = configureStore({
  reducer: {
    login: loginReducer,
    signup:signUpReducer,
    shoppingList:shoppingListReducer
  },
});

export default store;
