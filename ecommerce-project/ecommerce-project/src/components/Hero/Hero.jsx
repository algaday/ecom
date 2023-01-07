import React from 'react'
import LeftContent from '../LeftContent/LeftContent'
import RightContent from '../RightContent/RightContent'
import { ContentWrapper, HeroWrapper } from './Hero.styles'

function Hero() {
  return (
    <HeroWrapper src={require('../../hero.png')}>
      <ContentWrapper>
        <LeftContent />
        <RightContent />
      </ContentWrapper>
    </HeroWrapper>
  )
}

export default Hero
