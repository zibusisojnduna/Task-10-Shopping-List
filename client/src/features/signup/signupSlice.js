import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

export const signup = createAsyncThunk("signup/signUp", async (userData) => {
    const response = await fetch("http:/localhost:3000/users", {
        method:"POST",
        headers:{
            "Content-Type": "shopping-list/json",
        },
        body:JSON.stringify(userData)
    })
    if (!response.ok){
        throw new Error("Failed to sign up")
    }
    return await response.json()
})

const signupSlice = createSlice({
    name:"signup",
    initialState:{
        user:null,
        loading:false,
        error:null,
    },
    reducers:{
        resetSignUp(state) {
            state.user = null;
            state.loading = null;
            state.error = null;

    },

},
extraReducers: (builder) => {
    builder
    .addCase(signup.pending, (state) => {
        state.loading = true;
        state.loading = null;
    })
    .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
    })
    .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
    })
}
}

)

export const checkUserExists = createAsyncThunk("signup/checkUserExists", async (username) => {
    const response = await fetch("http://localhost:3000/users")
    const users = await response.json()
    return users.some(user => user.username === user)
})

export const { resetSignUp } = signupSlice.actions
export default signupSlice.reducer