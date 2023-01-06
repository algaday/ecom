import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allProducts: null,
  filteredFoods: null,
}

export const totalProductsSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenu: (state, action) => {
      state.allProducts = action.payload
    },
    setFilteredMenu: (state, action) => {
      state.filteredFoods = action.payload
    },
  },
})

export const { setMenu, setFilteredMenu } = totalProductsSlice.actions

export default totalProductsSlice.reducer
