import React from 'react'
import DishesCollection from '../DishesCollection/DishesCollection'
import {
  FullMenuContainer,
  FullMenuInfo,
  FullMenuText,
  FullMenuTitle,
  FullMenuWrapper,
} from './FullMenu.styles'

function FullMenu() {
  return (
    <FullMenuWrapper>
      <FullMenuContainer>
        <FullMenuInfo>
          <FullMenuTitle>Whats the Menu</FullMenuTitle>
          <FullMenuText>
            It is a long established fact that a reader will distracted by the
            readable content of a page when looking at its layout
          </FullMenuText>
        </FullMenuInfo>
        <DishesCollection />
      </FullMenuContainer>
    </FullMenuWrapper>
  )
}

export default FullMenu
