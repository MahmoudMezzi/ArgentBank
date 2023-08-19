import { createSlice } from "@reduxjs/toolkit";



export const logSlice = createSlice({
    name: "log",

    initialState : {token: null},
    reducers :{
        logIn: (state, action) => {
           state.token = action.payload
           return state
        },


        logOut: (state) => {
            state.token = null
            return state
        },
    }
})

export const {logIn, logOut} = logSlice.actions;