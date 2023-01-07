import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      )
      if (itemInCart) {
        itemInCart.quantity++
      } else {
        state.cart.push({ ...action.payload, quantity: 1 })
      }
    },
    increaseQuantity: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload)
      itemInCart.quantity++
    },
    decreaseQuantity: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload)
      if (itemInCart.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== action.payload)
      }
      itemInCart.quantity--
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload)
    },
  },
})

export const { addToCart, increaseQuantity, decreaseQuantity, removeItem } =
  cartSlice.actions

export default cartSlice.reducer
