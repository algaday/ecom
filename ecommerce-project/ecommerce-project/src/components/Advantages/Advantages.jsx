import React from 'react'
import Cards from '../Cards/Cards'
import {
  AdvantagesContainer,
  AdvantagesHeader,
  AdvantagesParapgraph,
  AdvantagesWrapper,
  ItemWrapper,
} from './Advantages.styles'
import { cardData } from '../../cardData'

function Advantages() {
  return (
    <AdvantagesWrapper>
      <AdvantagesContainer>
        <AdvantagesHeader>Why choose us</AdvantagesHeader>
        <AdvantagesParapgraph>
          It is a long established fact that a reader will distracted by the
          readable content of a page when looking at its layout
        </AdvantagesParapgraph>
        <ItemWrapper>
          {cardData.map((card) => (
            <Cards key={card.id} card={card} />
          ))}
        </ItemWrapper>
      </AdvantagesContainer>
    </AdvantagesWrapper>
  )
}

export default Advantages
