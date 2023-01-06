import React from 'react'
import { CardImg, CardText, CardTitle, CardWrapper } from './Cards.styles'

function Cards(props) {
  const { img, title, text } = props.card
  return (
    <CardWrapper>
      <CardImg src={img} />
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
    </CardWrapper>
  )
}

export default Cards
