import axios from "axios";
import { act } from "react";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"
export const LOGOUT = "LOGOUT"

export const login = (username, password) => async (dispatch) => {
    try {
        const response = await axios.get('http://localhost:3000/users', {
          params: { username, password },
        });
        if (response.data.length > 0) {
          dispatch({ type: LOGIN_SUCCESS, payload: response.data[0] });
        } else {
          dispatch({ type: LOGIN_FAILURE, payload: 'Invalid credentials' });
        }
      } catch (error) {
        dispatch({ type: LOGIN_FAILURE, payload: 'Login failed' });
      }
    };

    export const logout  = () => ({
        type:LOGOUT
    })

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const signup = (username, password) => async (dispatch) => {
  try {
    // First, check if the username already exists
    const existingUserResponse = await axios.get('http://localhost:3000/users', {
      params: { username },
    });

    if (existingUserResponse.data.length > 0) {
      dispatch({ type: SIGNUP_FAILURE, payload: 'Username already exists' });
      return;
    }

    // Create a new user
    const newUser = { username, password };
    const response = await axios.post('http://localhost:3000/users', newUser);
    dispatch({ type: SIGNUP_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: SIGNUP_FAILURE, payload: 'Sign up failed' });
  }
};