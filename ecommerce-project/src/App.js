import './App.css'
import MainPage from './pages/mainpage/MainPage'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { populate } from './store/productsSlice/productsSlice'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SharedLayout from './components/SharedLayout/SharedLayout'
import Error from './pages/Error/Error'
import ShopPage from './pages/shoppage/ShopPage'
import {
  setFilteredMenu,
  setMenu,
} from './store/totalProductsSlice/totalProductsSlice'
import SignInPage from './pages/SignInPage/SignInPage'
import LoginPage from './pages/LoginPage/LoginPage'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from './firebase/firebase'
import { addUser } from './store/userSlice/userSlice'
import CheckoutPage from './pages/CheckoutPage/CheckoutPage'

function App() {
  const dispatch = useDispatch()
  const fetchData = () => {
    fetch(
      'https://api.spoonacular.com/recipes/random?number=10&apiKey=1026e89e70cb4466837fe175880bbef9'
    )
      .then((res) => res.json())
      .then((products) => {
        return dispatch(populate(products.recipes))
      })
  }

  const fetchMenu = async () => {
    const response = await fetch(
      'https://api.spoonacular.com/recipes/random?number=100&apiKey=1026e89e70cb4466837fe175880bbef9'
    )

    const { recipes } = await response.json()
    const modifiedMenu = recipes?.map((item) => {
      let categories = ['breakfast', 'lunch', 'dinner']
      let randomNum = Math.floor(Math.random() * categories.length)

      return { ...item, categories: categories[randomNum] }
    })
    dispatch(setFilteredMenu(modifiedMenu))
    return dispatch(setMenu(modifiedMenu))
  }

  useEffect(() => {
    fetchData()
    fetchMenu()
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        createUserDocumentFromAuth(user)
      }
      dispatch(addUser(user))
    })
    return unsubscribe
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path='shop' element={<ShopPage />} />
          <Route path='checkout' element={<CheckoutPage />} />
          <Route
            path='signin'
            element={
              <ProtectedRoute>
                <SignInPage />
              </ProtectedRoute>
            }
          />
          <Route
            path='login'
            element={
              <ProtectedRoute>
                <LoginPage />
              </ProtectedRoute>
            }
          />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
