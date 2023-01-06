import styled from 'styled-components'

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const PaginationList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`
export const PaginationListItem = styled.li`
  list-style-type: none;
  cursor: pointer;
  :hover {
    color: #295fab;
  }
  &.active {
    color: orangered;
  }
`
