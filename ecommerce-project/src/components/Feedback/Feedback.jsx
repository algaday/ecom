import React, { useState } from 'react'
import { useEffect } from 'react'
import UserFeedback from '../UserFeedback/UserFeedback'
import {
  FeedbackWrapper,
  FeedbackContainer,
  FeedbackTitle,
  FeedbackText,
  FeedbackFeed,
  LeftArrow,
  RightArrow,
} from './Feedback.styles'

function Feedback() {
  const [user, setUser] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [feedPerPage] = useState(3)

  const indexOfLastPost = currentPage * feedPerPage
  const indexOfFirstPost = indexOfLastPost - feedPerPage
  const currentFeed = user?.slice(indexOfFirstPost, indexOfLastPost)

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const nextPage = () => {
    if (currentPage !== Math.ceil(user.length / feedPerPage)) {
      setCurrentPage(currentPage + 1)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=9')
        const { results } = await response.json()
        setUser(results)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  return (
    <FeedbackWrapper>
      <FeedbackContainer>
        <FeedbackTitle>Food lovers feedback</FeedbackTitle>
        <FeedbackText>
          It is a long established fact that a reader will distracted by the
          readable content of a page when looking at its layout
        </FeedbackText>
        <FeedbackFeed>
          {currentFeed?.map((item) => (
            <UserFeedback key={item.login.uuid} prop={item} />
          ))}
          <LeftArrow onClick={previousPage} />
          <RightArrow onClick={nextPage} />
        </FeedbackFeed>
      </FeedbackContainer>
    </FeedbackWrapper>
  )
}

export default Feedback
