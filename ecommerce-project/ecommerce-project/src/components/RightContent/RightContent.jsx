import React from 'react'
import { HeroImage, RightContentWrapper } from './RightContent.styles'

function RightContent() {
  return (
    <RightContentWrapper>
      <HeroImage src={require('../../cook.png')} />
    </RightContentWrapper>
  )
}

export default RightContent
