import React from 'react'
import {
  FeedWrapper,
  FeedImg,
  UserName,
  EmailDateContainer,
  UserEmail,
  UserDate,
  UserText,
} from './UserFeedback.styles'

function UserFeedback({ prop }) {
  const {
    picture: { medium },
    name: { first, last },
    email,
    registered: { date },
  } = prop

  return (
    <FeedWrapper>
      <FeedImg src={medium} />
      <UserName>
        {first} {last}
      </UserName>
      <EmailDateContainer>
        <UserEmail>{email}</UserEmail>
        <UserDate>{date.slice(0, 10)}</UserDate>
      </EmailDateContainer>
      <UserText>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
        repellat nemo soluta consequatur maiores corporis similique rerum
        numquam, explicabo facere.
      </UserText>
    </FeedWrapper>
  )
}

export default UserFeedback
