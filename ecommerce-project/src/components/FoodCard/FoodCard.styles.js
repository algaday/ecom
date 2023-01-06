import styled from 'styled-components'

export const FoodWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 30%;
  opacity: 0;
  transition: all 0.3s linear;

  width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  background: white;
  margin: 20px 0;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  /* code for slider  */

  &.prevCard {
    transform: translateX(-100%);
    opacity: 0;
  }

  &.activeCard {
    opacity: 1;
    transform: translateX(0);
  }

  &.nextCard {
    transform: translateX(100%);
    opacity: 0;
  }
`
export const FoodImgWrapper = styled.div``

export const FoodInfoWrapper = styled.div`
  padding: 5px 20px 20px;
  display: grid;

  gap: 15px;
`
export const FoodFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const FoodImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 10px 10px 0 0;
`
export const FoodTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
`
export const FoodLorum = styled.p``
export const FoodPrice = styled.p`
  font-size: 24px;
`
export const FoodButton = styled.div``
