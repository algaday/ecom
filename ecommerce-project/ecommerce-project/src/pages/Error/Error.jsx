import React from 'react'
import { ErrorContainer, ErrorText } from './Error.styles'

function Error() {
  return (
    <ErrorContainer>
      <ErrorText>
        Ooooops... PAGE NOT FOUND <br />
        404
      </ErrorText>
    </ErrorContainer>
  )
}

export default Error
