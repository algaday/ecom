import styled from 'styled-components'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'

export const CollectionCategories = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 30px;
`
export const CategoriesButtons = styled.button`
  font-size: 1.5rem;
  font-weight: 600;
  border: none;
  background: transparent;
  &.active {
    font-weight: 500;
    color: #f0531a;
  }
`

export const CategoryMenu = styled.div`
  margin: 40px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  justify-items: center;
`

export const RightArrow = styled(AiOutlineRight)`
  font-size: 2rem;
  font-weight: 600;
  color: white;
  background-color: orange;
  padding: 5px;
  border-radius: 100%;
  cursor: pointer;
`

export const LeftArrow = styled(AiOutlineLeft)`
  font-size: 2rem;
  font-weight: 600;
  color: white;
  background-color: orange;
  padding: 5px;
  border-radius: 100%;
  cursor: pointer;
`
