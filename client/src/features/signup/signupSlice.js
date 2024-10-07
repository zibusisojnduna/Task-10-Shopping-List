

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  error: null,
  success: false,
};


export const signup = createAsyncThunk('signup/registerUser', async (userData) => {
  const response = await axios.post('http://localhost:3000/users', userData);
  return response.data;
});

const singUpSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    resetState(state) {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(signup.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetState } = singUpSlice.actions;
export default singUpSlice.reducer;
