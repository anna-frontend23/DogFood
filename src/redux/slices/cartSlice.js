import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        goods: []
    },
    reducers: {
        addToCart(state, action) {
            const ItemInCart = state.goods.find((el) => el.id === action.payload.id)
            if(ItemInCart) {
                ItemInCart.quantity++
            } else {
                state.goods.push({...action.payload, quantity: 1})
            }
        },
        deleteFromCart(state, action) {
            const newState = state.goods.filter((el) => el.id !== action.payload)
            state.goods = newState
        },
        increment(state, action) {
           const item = state.goods.find((el) => el.id === action.payload)
           item.quantity++
        },
        decrement(state, action) {
            const item = state.goods.find((el) => el.id === action.payload)
            if(item.quantity === 1) {
                item.quantity = 1
            } else {
                item.quantity--
            }
        }
    }
})

export const { addToCart, deleteFromCart, increment, decrement } = cartSlice.actions
export const cartReducer = cartSlice.reducer