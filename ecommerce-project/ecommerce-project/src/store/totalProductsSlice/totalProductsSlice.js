import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchAllProducts = createAsyncThunk(
  'menu/fetchAllProducts',
  async () => {
    try {
      const response = await fetch(
        'https://api.spoonacular.com/recipes/random?number=100&apiKey=6f5eaee8dc264fbda005361bade57b81'
      )
      const { recipes } = await response.json()
      const modifiedMenu = recipes?.map((item) => {
        let categories = ['breakfast', 'lunch', 'dinner']
        let randomNum = Math.floor(Math.random() * categories.length)

        return { ...item, categories: categories[randomNum] }
      })
      return modifiedMenu
    } catch (error) {
      console.log(error)
    }
  }
)

const initialState = {
  allProducts: [],
  filteredFoods: [],
  isLoading: false,
}

export const totalProductsSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setFilteredMenu: (state, action) => {
      state.filteredFoods = action.payload
    },
  },

  extraReducers: {
    [fetchAllProducts.fulfilled]: (state, { payload }) => {
      state.allProducts = payload
      state.filteredFoods = payload
    },
  },
})

export const { setMenu, setFilteredMenu } = totalProductsSlice.actions

export default totalProductsSlice.reducer
