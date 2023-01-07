import styled from 'styled-components'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'

export const CartItemWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  margin: 20px 0;
  align-items: center;
`
export const CartItemImage = styled.img`
  width: 100px;
  object-fit: contain;
`
export const CartItemContainer = styled.div`
  text-align: left;
  flex: 2;
`
export const CartItemTitle = styled.h2`
  font-size: 1rem;
`
export const CartItemPrice = styled.p`
  font-size: 1rem;
  margin-top: 10px;
`
export const CartItemQuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const CartItemQuantity = styled.p``
export const CartUpArrow = styled(IoIosArrowUp)`
  cursor: pointer;
`
export const CartDownArrow = styled(IoIosArrowDown)`
  cursor: pointer;
`
export const LineBreak = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ebebeb;
`
