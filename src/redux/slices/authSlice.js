// authentication slice - it is a mock authentication adder slice.
// the reducers are easy to understand and scale.
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userName:"",
    isAuthenticated:false,
    isLoggedIn:false,
    phoneNumber:""
}

const authSlice = createSlice({
    initialState,
    name:"authSlice",
    reducers:{
        authenticateAndLoginUser:(state,action) => {
            state.userName = action.payload.userName;
            state.isAuthenticated = true;
            state.isLoggedIn = true;
            state.phoneNumber = action.payload.phoneNumber;
        },
        addPhoneNumberAndName: (state, action) => {
            state.userName = action.payload.userName;
            state.phoneNumber = action.payload.phoneNumber
        },
        logoutUser:(state) => {
            state.userName = "";
            state.isAuthenticated = false, 
            state.isLoggedIn = false, 
            state.phoneNumber = ""
        }
    }
})

export const {authenticateAndLoginUser, addPhoneNumberAndName, logoutUser} = authSlice.actions;

export default authSlice.reducer;