import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

export const loginUser = createAsyncThunk(
  "login/loginUser",
  async({username, password}, {rejectWithValue}) => {
    try{
      const response = await axios.get("http://localhost:3000/users")
      const user = response.data.find(
        (user) => user.username === username && user.password === password
      )
      if(!user) {
        throw new Error("Invallid credentials.")
      }
      return user
    }catch (error){
      return rejectWithValue(error.message)
    }
  }
)

const loginSlice = createSlice({
  name:"login",
  initialState:{
    user:null,
    status:"idle",
    error:null
  },
  reducers:{
    logout:(state) => {
      state.user = null
    }
  },
  extraReducers:(builder) => {
    builder
    .addCase(loginUser.pending, (state) => {
      state.status = "loading"
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.status = "suceeded"
      state.user = action.payload
      state.error = null
    })
    .addCase(loginUser.rejected, (state, action) => {
      state.status = "failed"
      state.error = action.payload
    })
  }
})

export const { logout } = loginSlice.actions
export default loginSlice.reducer