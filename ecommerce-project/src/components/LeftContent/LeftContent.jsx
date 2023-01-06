import React from 'react'
import CustomButton from '../Button/CustomButton'
import {
  HeroButton,
  HeroHeading,
  HeroParagraph,
  LeftContentWrapper,
} from './LeftContent.styles'

function LeftContent() {
  return (
    <>
      <LeftContentWrapper>
        <HeroHeading>
          Food you love, <br />
          delivered to you
        </HeroHeading>
        <HeroParagraph>
          It is a long established fact that a reader will
          <br /> distracted by the readable content of apage
          <br /> when looking at its layout
        </HeroParagraph>
        <HeroButton to='shop'>Check Food Store</HeroButton>
      </LeftContentWrapper>
    </>
  )
}

export default LeftContent
