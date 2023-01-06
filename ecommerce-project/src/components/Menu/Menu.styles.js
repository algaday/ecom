import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const MenuBar = styled.nav`
  display: flex;
`

export const Links = styled(NavLink)`
  margin-left: 20px;
  font-size: 1.2rem;
  text-decoration: none;
  color: black;
  &.active {
    color: #f0531a;
  }
`
