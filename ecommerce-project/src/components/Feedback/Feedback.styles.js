import styled from 'styled-components'
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs'

export const FeedbackWrapper = styled.div`
  margin: 50px 0;
`
export const FeedbackContainer = styled.div`
  width: 80%;
  margin: auto;
`
export const FeedbackTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5rem;
`
export const FeedbackText = styled.p`
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.5rem;
`
export const FeedbackFeed = styled.div`
  margin: 100px 0;
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  position: relative;
`
export const LeftArrow = styled(BsFillArrowLeftCircleFill)`
  position: absolute;
  left: 0;
  font-size: 1.5rem;
  color: orangered;
`
export const RightArrow = styled(BsFillArrowRightCircleFill)`
  position: absolute;
  right: 0;
  font-size: 1.5rem;
  color: orangered;
`
