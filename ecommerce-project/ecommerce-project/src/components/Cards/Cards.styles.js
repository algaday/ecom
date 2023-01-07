import styled from 'styled-components'

export const CardWrapper = styled.div`
  height: 300px;
  max-width: 500px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  border-radius: 10px;
`

export const CardImg = styled.img`
  height: 100px;
  width: 100px;
  margin-bottom: 20px;
`
export const CardTitle = styled.h2`
  font-size: 24px;
  color: black;
  font-weight: 500;
  margin-bottom: 20px;
`
export const CardText = styled.p`
  font-size: 20px;
  color: black;
  text-align: center;
`
