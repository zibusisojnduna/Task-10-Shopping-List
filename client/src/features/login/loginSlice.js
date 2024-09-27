import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  accessGranted: false,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    verifyUser: (state) => {
      if (state.accessGranted === true){
        alert("Sucessfull!")
      } else{
        alert("Unsucessfull")
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { verifyUser } = loginSlice.actions

export default loginSlice.reducer