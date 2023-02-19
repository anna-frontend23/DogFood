import { createSlice, current } from "@reduxjs/toolkit";
import { initialState } from "../initialState";


const productsSlice = createSlice({
    name: 'products',
    initialState: initialState.products,
    reducers: {
        getProducts(state, action) {
            return state = action.payload
        },
        addProduct(state, action) {
            state.push(action.payload)
        },
        deleteProduct(state, action) {
            return state.filter((product) => product.id !== action.payload)
        },
        editProduct(state, action) {
           return state.map((product) => {
            if (product.id !== action.payload.id) {
                return product
            } else {
                return {
                    ...product,
                    ...action.payload
                }
            }
           })
        }
    }
})

export const {getProducts, addProduct, deleteProduct, editProduct} = productsSlice.actions;
export const productsReducer = productsSlice.reducer;