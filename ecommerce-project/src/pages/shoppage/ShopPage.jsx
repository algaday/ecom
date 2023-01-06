import React from 'react'
import { ShopPageWrapper } from './ShopPage.styles'
import ShopMenu from '../../components/ShopMenu/ShopMenu'
import ShopMenuFilter from '../../components/ShopMenuFilter/ShopMenuFilter'
function ShopPage() {
  return (
    <ShopPageWrapper>
      <ShopMenuFilter />
      <ShopMenu />
    </ShopPageWrapper>
  )
}

export default ShopPage
