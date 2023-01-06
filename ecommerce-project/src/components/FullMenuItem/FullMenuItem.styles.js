import styled from 'styled-components'

export const MenuCardWrapper = styled.div`
  max-width: 400px;
  border-radius: 15px;

  overflow: hidden;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`
export const MenuCardImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`
export const MenuCardInfo = styled.div`
  padding: 10px 20px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  justify-content: space-around;
  align-content: flex-end;
  row-gap: 5px;
`
export const MenuCardTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
`
export const MenuCardText = styled.p`
  font-size: 1rem;
`
export const MenuCardButtonContainer = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const MenuCardPrice = styled.p`
  font-size: 1rem;
  font-weight: bold;
`
