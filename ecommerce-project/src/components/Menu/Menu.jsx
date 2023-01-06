import React from 'react'
import { MenuBar, Links } from './Menu.styles'

function Menu() {
  return (
    <MenuBar>
      <Links to='/'>Home</Links>
      <Links to='/shop'>Shop</Links>
      <Links to='/contact'>Contact</Links>
    </MenuBar>
  )
}

export default Menu
