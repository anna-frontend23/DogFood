import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState";


export const searchSlice = createSlice({
    name: 'search',
    initialState: initialState.search,
    reducers: {
        setSearch(state, action) {
            return state = action.payload
        }
    }
})

export const {setSearch} = searchSlice.actions;
export const searchReducer = searchSlice.reducer;