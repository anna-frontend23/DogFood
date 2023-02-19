import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState";


const userSlice = createSlice({
    name: 'user',
    initialState: initialState.user,
    reducers: {
        getUserInfo(state, action) {
            return state = action.payload
        }
    }
})

export const {getUserInfo} = userSlice.actions
export const userReducer = userSlice.reducer