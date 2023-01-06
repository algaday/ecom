import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/cartSlice/cartSlice'
import CustomButton from '../Button/CustomButton'
import {
  FoodFooter,
  FoodImg,
  FoodImgWrapper,
  FoodInfoWrapper,
  FoodLorum,
  FoodPrice,
  FoodTitle,
  FoodWrapper,
} from './FoodCard.styles'

function FoodCard({ food: { image, title, id, pricePerServing }, cardStyle }) {
  const dispatch = useDispatch()
  const roundPrice = Math.ceil(pricePerServing)
  const addToCartFunction = () => {
    dispatch(
      addToCart({
        id,
        image,
        title,
        pricePerServing: roundPrice,
      })
    )
  }

  return (
    <FoodWrapper className={cardStyle}>
      <FoodImgWrapper>
        <FoodImg src={image} />
      </FoodImgWrapper>
      <FoodInfoWrapper>
        <FoodTitle>{title}</FoodTitle>
        <FoodLorum>
          Lorem ipsum dolor sit amet consecte adipisicing elit.
        </FoodLorum>
        <FoodFooter>
          <FoodPrice>${roundPrice}</FoodPrice>
          <CustomButton text={'Add to Cart'} addCart={addToCartFunction} />
        </FoodFooter>
      </FoodInfoWrapper>
    </FoodWrapper>
  )
}

export default FoodCard
