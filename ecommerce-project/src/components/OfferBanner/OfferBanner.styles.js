import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const OfferWrapper = styled.div`
  background-color: #faf9fc;
`
export const OfferImageWrapper = styled.div`
  flex: 0.8;
  position: relative;
`
export const OfferContainer = styled.div`
  width: 85%;
  margin: auto;
  height: 600px;
  margin-bottom: 100px;
  background: url(${(props) => props.src}) no-repeat bottom;
  background-size: cover;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
`
export const OfferOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(168, 0, 0, 0.8);
  mix-blend-mode: multiply;
  z-index: -9;
`
export const OfferInfo = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Caramel&family=Qwigley&family=Teko:wght@500&display=swap');
  flex: 0.5;
  margin-left: 100px;
  transform: rotate(-10deg);
`
export const OfferImg = styled.img`
  width: 90%;
  height: 25rem;
  object-fit: contain;
`
export const SauceImg = styled.img`
  width: 30%;
  position: absolute;
  top: 40%;
  right: 10%;
`
export const LeftArrowImg = styled.img`
  width: 5%;
  position: absolute;
  bottom: 10%;
  left: 13%;
`

export const OfferInfoTopTitle = styled.h2`
  font-family: 'Caramel', cursive;
  font-size: 6rem;
  line-height: 90px;
  position: relative;
  z-index: 999;
  color: rgba(252, 152, 3, 1);
`
export const OfferInfoTitle = styled.h2`
  font-family: 'Teko', sans-serif;
  line-height: 90px;
  text-transform: uppercase;
  font-size: 8rem;
  color: rgba(252, 152, 3, 1);

  &.special {
    color: white;
  }
`
export const OfferInfoText = styled.p`
  font-family: 'Caramel', cursive;
  color: white;
  font-size: 5rem;
  line-height: 20px;
  text-align: center;
`
export const OfferInfoButton = styled(Link)`
  transform: rotate(10deg);
  display: block;
  width: fit-content;
  background-color: rgba(252, 152, 3, 1);
  font-size: 1rem;
  font-weight: 900;
  color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border: none;
  margin-top: 50px;
  border-radius: 40px;
  text-transform: uppercase;
  cursor: pointer;
`

export const DeliveryWrapper = styled.div`
  text-align: center;
  width: auto;
  position: absolute;
  left: 0;
  bottom: 0;
  padding-right: 50px;
`
export const TwentyFourSeven = styled.h2`
  color: rgba(252, 152, 3, 1);
  font-size: 3rem;
  font-weight: 500;
`
export const HomeDelivery = styled.h2`
  font-family: 'Qwigley', cursive;
  color: white;
  font-size: 2.5rem;
`
