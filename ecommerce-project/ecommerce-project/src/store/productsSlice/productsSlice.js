import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

export const fetchTenProducts = createAsyncThunk(
  'fetchTenProducts',
  async () => {
    try {
      const response = await fetch(
        'https://api.spoonacular.com/recipes/random?number=10&apiKey=6f5eaee8dc264fbda005361bade57b81'
      )
      const data = await response.json()
      return data.recipes
    } catch (error) {
      console.log(error)
    }
  }
)

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTenProducts.fulfilled]: (state, { payload }) => {
      state.value = payload
    },
  },
})

export const { populate } = productsSlice.actions

export default productsSlice.reducer
