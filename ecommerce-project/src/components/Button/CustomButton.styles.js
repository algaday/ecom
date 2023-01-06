import styled from 'styled-components'

export const CustomButtonStyle = styled.button`
  width: auto;
  color: ${(props) => (props.secondary ? 'black' : 'white')};
  padding: 15px 20px;
  background-color: ${(props) => (props.secondary ? 'transparent' : '#f0531a')};
  border: none;
  border-radius: 10%;
  font-size: 16px;
  cursor: pointer;
`
