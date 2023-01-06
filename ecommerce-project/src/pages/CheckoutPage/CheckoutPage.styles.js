import styled from 'styled-components'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { CiCircleRemove } from 'react-icons/ci'
export const CheckoutWrapper = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
`
export const CheckoutContainer = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 100px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
`
export const ProductsShowContainer = styled.div`
  height: auto;
`
export const ProductsShowHeader = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 0.2fr;
  border-bottom: 1px solid lightgray;
  padding-bottom: 20px;
`
export const ProductName = styled.p`
  font-size: 1rem;
  text-transform: uppercase;
`

export const ProductsBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr 0.2fr;
  padding: 20px 0;
  border-bottom: 1px solid lightgray;
  align-items: center;
`

export const ProductImg = styled.img`
  width: 100%;
  object-fit: scale-down;
`
export const ProductTitle = styled.p`
  color: black;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 500;
  margin-left: 10px;
`
export const ProductPrice = styled.p`
  color: black;
  font-size: 1rem;
`

export const ProductTotal = styled.p`
  color: black;
  font-size: 1rem;
`

export const ProductQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  background-color: lightgray;
  border-radius: 30px;
`

export const ProductQuantity = styled.p`
  color: black;
  font-size: 1rem;
`

export const MinusIcon = styled(AiOutlineMinus)`
  padding: 5px;
  font-size: 1.5rem;
  cursor: pointer;
`
export const PlusIcon = styled(AiOutlinePlus)`
  padding: 5px;
  font-size: 1.5rem;
  cursor: pointer;
`

export const RemoveIcon = styled(CiCircleRemove)`
  font-size: 2rem;
  cursor: pointer;
`

export const TotalPriceContainer = styled.div`
  width: 100%;
  background-color: lightgray;
  height: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const PriceInfoHeaderText = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  padding-bottom: 20px;
  border-bottom: 1px solid gray;
`
export const MainTextContainer = styled.div`
  padding: 20px 0;
  display: grid;
  row-gap: 15px;
  grid-template-columns: 1fr 1fr;
`
export const MainText = styled.p`
  font-size: 1rem;
`
export const MainTextPrice = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: black;
`
export const PriceInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TotalPriceText = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`
export const TotalPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`

export const CheckoutButton = styled.button`
  width: 100%;
  border: none;
  background-color: #f0531a;
  color: white;
  font-size: 1.2rem;
  padding: 20px 0;
`
