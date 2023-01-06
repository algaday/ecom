import React, { useState } from 'react'
import {
  AccordionWrapper,
  AccordionContainer,
  AccordionImg,
  AccordionContentWrapper,
  AccordionTitle,
  AccordionText,
  AccordionContent,
  ImageWrapper,
} from './Accordion.styles'
import AccordionItem from '../AccordionItem/AccordionItem'
import { accordionData } from './dataAccordion'

function Accordion() {
  const [clicked, setClicked] = useState('0')
  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked('0')
    }
    setClicked(index)
  }

  return (
    <AccordionWrapper>
      <AccordionContainer>
        <ImageWrapper>
          <AccordionImg src={require('./baker.jpg')} />
        </ImageWrapper>
        <AccordionContentWrapper>
          <AccordionTitle>Frequently Asked Questions</AccordionTitle>
          <AccordionText>
            We offer a multidisciplinary and integrative approach to joint care,
            which means we do everything we can to help you find fast, lasting
            relief.
          </AccordionText>
          <AccordionContent>
            {accordionData.map((item, index) => (
              <AccordionItem
                key={item.id}
                {...item}
                onToggle={() => handleToggle(index)}
                active={clicked === index}
              />
            ))}
          </AccordionContent>
        </AccordionContentWrapper>
      </AccordionContainer>
    </AccordionWrapper>
  )
}

export default Accordion
