import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "../initialState"

const commentsSlice = createSlice({
    name: 'comments',
    initialState: initialState.comments,
    reducers: {
        getProductComments(state, action) {
            return state = action.payload
        },
        addComment(state, action) {
            state.push(action.payload)
        },
        deleteComment(state, action) {
            return state.filter((comment) => comment._id !== action.payload)
        }
    }
})

export const {getProductComments, addComment, deleteComment} = commentsSlice.actions
export const commentsReducer = commentsSlice.reducer