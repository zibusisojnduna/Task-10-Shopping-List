// src/slices/loginSlice.js
// src/slices/loginSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const login = createAsyncThunk('login/loginUser', async (credentials) => {
  const response = await axios.get('http://localhost:3000/users', {
    params: {
      username: credentials.username,
      password: credentials.password,
    },
  });
  if (response.data.length > 0) {
    return response.data[0]; // Return the user object
  } else {
    throw new Error('Invalid credentials');
  }
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
