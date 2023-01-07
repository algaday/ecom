import React from 'react'
import {
  MenuCardWrapper,
  MenuCardImg,
  MenuCardInfo,
  MenuCardTitle,
  MenuCardText,
  MenuCardButtonContainer,
  MenuCardPrice,
} from './FullMenuItem.styles'
import CustomButton from '../Button/CustomButton'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/cartSlice/cartSlice'

function FullMenuItem({ prop }) {
  const { image, title, id, pricePerServing } = prop
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
    <MenuCardWrapper>
      <MenuCardImg
        src={
          image ||
          'https://www.eatthis.com/wp-content/uploads/sites/4/2020/10/healthy-plate.jpg'
        }
      />
      <MenuCardInfo>
        <MenuCardTitle>{title}</MenuCardTitle>
        <MenuCardText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
          atque! Porro, rem!
        </MenuCardText>
        <MenuCardButtonContainer>
          <MenuCardPrice>${roundPrice}</MenuCardPrice>
          <CustomButton text={'Add to Cart'} addCart={addToCartFunction} />
        </MenuCardButtonContainer>
      </MenuCardInfo>
    </MenuCardWrapper>
  )
}

export default FullMenuItem
