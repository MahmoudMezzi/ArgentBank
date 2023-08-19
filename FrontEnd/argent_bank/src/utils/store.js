import { configureStore } from '@reduxjs/toolkit'
import { logSlice } from '../features/log'
import { userInfoSlice } from '../features/userInfo'
import { editInfoSlice } from '../features/editInfo'

export const store = configureStore({
    reducer: {
       log: logSlice.reducer,
       userInfo: userInfoSlice.reducer,
       editInfo: editInfoSlice.reducer,
    }
})