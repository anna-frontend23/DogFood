import { configureStore } from "@reduxjs/toolkit";
import { commentsReducer } from "./slices/commentsSlice";
import { productsReducer } from "./slices/productsSlice";
import { searchReducer } from "./slices/searchSlice";
import { tokenReducer } from "./slices/tokenSlice";
import { userReducer } from "./slices/userSlice";

export const store = configureStore({
   reducer: {
    token: tokenReducer,
    search: searchReducer,
    products: productsReducer,
    comments: commentsReducer,
    user: userReducer
   } 
})