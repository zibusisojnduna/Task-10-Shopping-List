// src/slices/loginSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const login = createAsyncThunk('login/fetchLogin', async ({ username, password }) => {
  const response = await axios.get('http://localhost:3000/users', {
    params: { username, password }
  });
  if (response.data.length === 0) {
    throw new Error('Invalid credentials');
  }
  return response.data[0]; // Return user data
});

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { logout } = loginSlice.actions;

export default loginSlice.reducer;
