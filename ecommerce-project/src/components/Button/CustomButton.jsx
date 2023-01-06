import React from 'react'
import { CustomButtonStyle } from './CustomButton.styles'

function CustomButton(props) {
  const { text, secondary, addCart } = props

  return secondary ? (
    <CustomButtonStyle secondary onClick={() => addCart()}>
      {text}
    </CustomButtonStyle>
  ) : (
    <CustomButtonStyle onClick={() => addCart()}>{text}</CustomButtonStyle>
  )
}

export default CustomButton
