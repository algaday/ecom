import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    populate: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { populate } = productsSlice.actions

export default productsSlice.reducer
