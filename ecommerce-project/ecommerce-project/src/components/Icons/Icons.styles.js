import styled from 'styled-components'
import { CiSearch, CiShoppingCart } from 'react-icons/ci'
import { Link } from 'react-router-dom'

export const IconsWrapper = styled.div`
  padding: 0 10px;
  display: flex;
  gap: 20px;
  justify-content: space-evenly;
  align-items: center;
`
export const SearchWrapper = styled.div`
  background-color: white;
  border-radius: 50%;

  padding: 20px;
  cursor: pointer;
`

export const CustomSearch = styled(CiSearch)`
  color: black;
  font-size: 30px;
`

export const ShoppingCartWrapper = styled.div`
  position: relative;
`
export const ItemsAmount = styled.div`
  display: ${(props) => (props.amount ? 'block' : 'none')};
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  background-color: red;
  border-radius: 100%;
  width: 15px;
  height: 15px;
  text-align: center;
`
export const ItemsAmountQuantity = styled.p`
  font-size: 0.7rem;
`
export const ShoppingCart = styled(CiShoppingCart)`
  color: black;
  font-size: 40px;
`

export const SignInLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  color: white;
  background-color: orangered;
  padding: 10px 15px;
  border-radius: 5px;
`
export const UserDisplayname = styled.p`
  font-size: 1rem;
  cursor: pointer;
`
