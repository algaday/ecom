import React from 'react'
import { useDispatch } from 'react-redux'
import {
  increaseQuantity,
  decreaseQuantity,
} from '../../store/cartSlice/cartSlice'
import {
  CartItemContainer,
  CartItemImage,
  CartItemPrice,
  CartItemQuantity,
  CartItemTitle,
  CartItemWrapper,
  CartDownArrow,
  CartItemQuantityContainer,
  CartUpArrow,
  LineBreak,
} from './CartItem.styles'

function CartItem({ image, title, pricePerServing, quantity, id }) {
  const dispatch = useDispatch()

  return (
    <>
      <CartItemWrapper>
        <CartItemImage src={image} />
        <CartItemContainer>
          <CartItemTitle>{title}</CartItemTitle>
          <CartItemPrice>${pricePerServing}</CartItemPrice>
        </CartItemContainer>
        <CartItemQuantityContainer>
          <CartUpArrow onClick={() => dispatch(increaseQuantity(id))} />
          <CartItemQuantity>{quantity}</CartItemQuantity>
          <CartDownArrow onClick={() => dispatch(decreaseQuantity(id))} />
        </CartItemQuantityContainer>
      </CartItemWrapper>
      <LineBreak />
    </>
  )
}

export default CartItem
