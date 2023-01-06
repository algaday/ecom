import React from 'react'
import {
  DeliveryWrapper,
  HomeDelivery,
  LeftArrowImg,
  OfferContainer,
  OfferImageWrapper,
  OfferImg,
  OfferInfo,
  OfferInfoButton,
  OfferInfoText,
  OfferInfoTitle,
  OfferInfoTopTitle,
  OfferOverlay,
  OfferWrapper,
  SauceImg,
  TwentyFourSeven,
} from './OfferBanner.styles'

function OfferBanner() {
  return (
    <OfferWrapper>
      <OfferContainer src={require('./woodenback.jpg')}>
        <OfferOverlay />
        <OfferInfo>
          <OfferInfoTopTitle>Today's</OfferInfoTopTitle>
          <OfferInfoTitle>
            <OfferInfoTitle className='special'>Special</OfferInfoTitle> Food
            Menu
          </OfferInfoTitle>
          <OfferInfoText>This weekend only</OfferInfoText>
          <OfferInfoButton to='shop'>Order Now</OfferInfoButton>
        </OfferInfo>

        <OfferImageWrapper>
          <OfferImg src={require('./dishPotato.png')} />
          <SauceImg src={require('./sauce.png')} />
        </OfferImageWrapper>
      </OfferContainer>
    </OfferWrapper>
  )
}

export default OfferBanner
