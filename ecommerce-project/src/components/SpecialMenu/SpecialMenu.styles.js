import styled from 'styled-components'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'

export const SpecialMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  background-color: #faf9fc;
  overflow: hidden;
  width: 100%;
  padding-top: 50px;
`
export const SpecialMenuTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 36px;
`
export const SpecialMenuText = styled.p`
  text-align: center;
  font-size: 24px;
`
export const SpecialMenuDishes = styled.div`
  margin: 0 auto;
  margin-top: 4rem;
  width: 90%;
  height: 450px;
  max-width: 800px;
  text-align: center;
  position: relative;
  display: flex;
  overflow: hidden;
`

export const RightArrow = styled(AiOutlineRight)`
  position: absolute;
  top: 50%;
  right: 0;
  cursor: pointer;
`

export const LeftArrow = styled(AiOutlineLeft)`
  position: absolute;
  top: 50%;
  left: 0;
  cursor: pointer;
`
