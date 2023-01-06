import styled from 'styled-components'

export const FeedWrapper = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  max-width: 500px;
  min-width: 350px;
  height: auto;
  padding: 30px;
  border-radius: 15px;
  position: relative;
`
export const FeedImg = styled.img`
  border-radius: 100%;
  position: absolute;
  top: -20%;
  left: 20%;
  border: 10px solid #e6ebe7;
`
export const UserName = styled.h2`
  margin: 30px 0 5px 0;
  font-size: 1.5rem;
  font-weight: 600;
`
export const EmailDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
`
export const UserEmail = styled.p`
  font-size: 0.8rem;
  color: #adadad;
`
export const UserDate = styled.p`
  font-size: 0.8rem;
  color: #adadad;
`
export const UserText = styled.p`
  font-size: 1rem;
`
