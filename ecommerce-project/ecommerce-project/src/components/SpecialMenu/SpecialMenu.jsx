import React from 'react'
import {
  LeftArrow,
  RightArrow,
  SpecialMenuDishes,
  SpecialMenuText,
  SpecialMenuTitle,
  SpecialMenuWrapper,
} from './SpecialMenu.styles'

import { useDispatch, useSelector } from 'react-redux'
import FoodCard from '../FoodCard/FoodCard'
import { useState } from 'react'
import { useEffect } from 'react'
import { fetchTenProducts } from '../../store/productsSlice/productsSlice'

function SpecialMenu() {
  const [index, setIndex] = useState(0)
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.value)
  useEffect(() => {
    dispatch(fetchTenProducts())
  }, [])

  const slideLeft = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1
      if (index < 0) {
        index = products?.length - 1
      }
      return index
    })
  }

  const slideRight = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1
      if (index > products?.length - 1) {
        index = 0
      }
      return index
    })
  }

  return (
    <SpecialMenuWrapper>
      <SpecialMenuTitle>Our Special Menu</SpecialMenuTitle>
      <SpecialMenuText>
        It is a long established fact that a reader will distracted by the
        readable content of a page when looking at its layout
      </SpecialMenuText>
      <SpecialMenuDishes>
        {products?.map((food, n) => {
          let position =
            n > index ? 'nextCard' : n === index ? 'activeCard' : 'prevCard'
          return <FoodCard key={food.id} food={food} cardStyle={position} />
        })}

        <LeftArrow onClick={slideLeft} />
        <RightArrow onClick={slideRight} />
      </SpecialMenuDishes>
    </SpecialMenuWrapper>
  )
}

export default SpecialMenu
