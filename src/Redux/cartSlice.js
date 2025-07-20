import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartList: [],
    },
    reducers: {
        removeAllCartItems: (state) => {
            state.cartList= []
        },
  addCartItem: (state,action) => {
    const product = action.payload
    const existingItem = state.cartList.find(item => item.id === product.id)
    if(existingItem){
    existingItem.quantity += product.quantity
    }else{
        state.cartList.push(product)
    }
  },
  removeCartItem: (state,action) => {
    state.cartList = state.cartList.filter(item => item.id !== action.payload)
  },
  incrementCartItemQuantity: (state,action) => {
    const item = state.cartList.find(item => item.id === action.payload)
    if (item){
        item.quantity += 1
    }
  },
  decrementCartItemQuantity: (state,action) => {
    const item = state.cartList.find(item => item.id === action.payload)
    if (item && item.quantity > 1){
        item.quantity -= 1
    }
  }
  }
})

export const {addCartItem,removeCartItem,removeAllCartItems,decrementCartItemQuantity,incrementCartItemQuantity} = cartSlice.actions
export default cartSlice.reducer