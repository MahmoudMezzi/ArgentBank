import { createSlice } from "@reduxjs/toolkit";

export const userInfoSlice = createSlice({
    name: "userInfo",

    initialState : {},
    reducers :{
        saveUserInfo: (state, action) => {
           state = action.payload
           return state        
        },

        changeUserName :(state, action) => {
            state.userName = action.payload
        },

        removeUserInfo: (state) => {
            state = {}
            return state
        },

    }
})

export const {saveUserInfo, changeUserName, removeUserInfo} = userInfoSlice.actions;