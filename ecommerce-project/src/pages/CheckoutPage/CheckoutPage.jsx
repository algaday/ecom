import produce from 'immer'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from '../../store/cartSlice/cartSlice'
import {
  CheckoutButton,
  CheckoutContainer,
  CheckoutWrapper,
  MainText,
  MainTextContainer,
  MainTextPrice,
  MinusIcon,
  PlusIcon,
  PriceInfoContainer,
  PriceInfoHeaderText,
  ProductImg,
  ProductName,
  ProductPrice,
  ProductQuantity,
  ProductQuantityContainer,
  ProductsBody,
  ProductsShowContainer,
  ProductsShowHeader,
  ProductTitle,
  ProductTotal,
  RemoveIcon,
  TotalPrice,
  TotalPriceContainer,
  TotalPriceText,
} from './CheckoutPage.styles'

function CheckoutPage() {
  const cart = useSelector((state) => state.cart.cart)
  const dispatch = useDispatch()

  const total = cart.reduce((curr, prev) => {
    let sum = prev.quantity * prev.pricePerServing
    return Math.ceil(curr + sum)
  }, 0)

  return (
    <CheckoutWrapper>
      <CheckoutContainer>
        <ProductsShowContainer>
          <ProductsShowHeader>
            <ProductName>Product</ProductName>
            <ProductName>Price</ProductName>
            <ProductName>Quantity</ProductName>
            <ProductName>Total</ProductName>
          </ProductsShowHeader>
          {cart.map(({ id, image, title, pricePerServing, quantity }) => {
            return (
              <ProductsBody key={id}>
                <ProductImg src={image} />
                <ProductTitle>{title}</ProductTitle>{' '}
                <ProductPrice>${pricePerServing}</ProductPrice>
                <ProductQuantityContainer>
                  <MinusIcon onClick={() => dispatch(decreaseQuantity(id))} />
                  <ProductQuantity>{quantity}</ProductQuantity>
                  <PlusIcon onClick={() => dispatch(increaseQuantity(id))} />
                </ProductQuantityContainer>
                <ProductTotal>${pricePerServing * quantity}</ProductTotal>
                <RemoveIcon onClick={() => dispatch(removeItem(id))} />
              </ProductsBody>
            )
          })}
        </ProductsShowContainer>
        <TotalPriceContainer>
          <PriceInfoHeaderText>Order Summary</PriceInfoHeaderText>
          <MainTextContainer>
            <MainText>Subtotal</MainText>
            <MainTextPrice>${total}</MainTextPrice>
            <MainText>Shipping</MainText>
            <MainTextPrice>Free</MainTextPrice>
          </MainTextContainer>
          <PriceInfoContainer>
            <TotalPriceText>Total price</TotalPriceText>
            <TotalPrice>${total}</TotalPrice>
          </PriceInfoContainer>
          {cart.length > 0 ? (
            <CheckoutButton>Checkout to order</CheckoutButton>
          ) : null}
        </TotalPriceContainer>
      </CheckoutContainer>
    </CheckoutWrapper>
  )
}

export default CheckoutPage
