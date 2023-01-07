import styled from 'styled-components'

export const HeroWrapper = styled.div`
  width: 100%;
  background-image: url(${(props) => props.src});
`
export const ContentWrapper = styled.div`
  position: relative;
  width: 80%;
  margin: auto;
  height: 700px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`
