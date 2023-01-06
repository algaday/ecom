import styled from 'styled-components'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { AiOutlineMinusCircle } from 'react-icons/ai'

export const ItemWrapper = styled.div`
  margin: 10px 0;
`
export const ItemContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 15px;
  padding: 30px 15px;
`
export const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ItemTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
`
export const ItemIconPlus = styled(BsFillPlusCircleFill)`
  color: orangered;
  font-size: 1.5rem;
  margin-left: 5px;
`
export const ItemIconMinus = styled(AiOutlineMinusCircle)`
  color: orangered;
  font-size: 1.5rem;
`
export const ItemModal = styled.div``
export const ModalText = styled.div`
  padding: 10px 0;
`
