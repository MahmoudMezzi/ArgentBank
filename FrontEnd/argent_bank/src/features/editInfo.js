import { createSlice } from "@reduxjs/toolkit";



export const editInfoSlice = createSlice({
    name: "editInfo",

    initialState : {open: false},
    reducers :{
        toggleEdit: (state) => {
           state.open = !state.open
        },
    }
})

export const { toggleEdit } = editInfoSlice.actions;