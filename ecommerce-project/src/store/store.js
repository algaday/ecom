import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productsSlice/productsSlice'
import menuReducer from './totalProductsSlice/totalProductsSlice'
import cartReducer from './cartSlice/cartSlice'
import userReducer from './userSlice/userSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    menu: menuReducer,
    cart: cartReducer,
    user: userReducer,
  },
})
