import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CartInfoWrapper = styled.div`
  display: grid;
  width: 400px;
  height: 400px;
  background-color: white;
  position: absolute;
  right: 16%;
  top: 12%;
  z-index: 999;
  padding: 20px 15px;
  overflow-y: scroll;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`
export const CheckoutBtn = styled(Link)`
  background-color: #f0531a;
  color: white;
  font-size: 1.2rem;
  border: none;
  width: 100%;
  padding: 15px 0;
  margin-top: 15px;
  text-align: center;
`

export const CheckoutTotal = styled.h2`
  margin: 10px 0;
  font-size: 1.5rem;
  font-weight: 600;
`

export const CheckoutText = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  text-decoration: underline;
  cursor: pointer;
  justify-self: end;
  align-self: flex-start;
`
