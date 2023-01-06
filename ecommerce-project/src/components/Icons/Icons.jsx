import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Logout } from '../../firebase/firebase'
import { addUser } from '../../store/userSlice/userSlice'
import CartInfo from '../CartInfo/CartInfo'

import {
  CustomSearch,
  IconsWrapper,
  ItemsAmount,
  ItemsAmountQuantity,
  SearchWrapper,
  ShoppingCart,
  ShoppingCartWrapper,
  SignInLink,
  UserDisplayname,
} from './Icons.styles'

function Icons() {
  const [show, setShow] = useState(false)
  const cart = useSelector((stete) => stete.cart.cart)
  const user = useSelector((stete) => stete.user.user)
  const dispatch = useDispatch()

  let amount = cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0
  )

  const closeFunc = () => {
    setShow(false)
  }
  return (
    <>
      <IconsWrapper>
        <SearchWrapper>
          <CustomSearch />
        </SearchWrapper>
        <ShoppingCartWrapper onClick={() => setShow(!show)}>
          <ShoppingCart />
          <ItemsAmount amount={amount}>
            <ItemsAmountQuantity>{amount}</ItemsAmountQuantity>
          </ItemsAmount>
        </ShoppingCartWrapper>
        {show ? <CartInfo closeFunc={closeFunc} /> : null}

        {!user ? (
          <SignInLink to='/login'>Sign In</SignInLink>
        ) : (
          <UserDisplayname
            onClick={() => {
              Logout()
              dispatch(addUser(null))
            }}
          >
            {user.email}
          </UserDisplayname>
        )}
      </IconsWrapper>
    </>
  )
}

export default Icons
