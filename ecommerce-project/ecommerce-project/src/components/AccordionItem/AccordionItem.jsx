import React from 'react'
import {
  ItemWrapper,
  ItemContainer,
  ItemHeader,
  ItemTitle,
  ItemIconPlus,
  ItemIconMinus,
  ItemModal,
  ModalText,
} from './AccordionItem.styles'

function AccordionItem({ text, title, onToggle, active }) {
  return (
    <ItemWrapper>
      <ItemContainer>
        <ItemHeader>
          <ItemTitle>{title}</ItemTitle>
          {active ? (
            <ItemIconMinus onClick={onToggle} />
          ) : (
            <ItemIconPlus onClick={onToggle} />
          )}
        </ItemHeader>
        <ItemModal>{active ? <ModalText>{text}</ModalText> : null}</ItemModal>
      </ItemContainer>
    </ItemWrapper>
  )
}

export default AccordionItem
