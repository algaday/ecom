import React from 'react'
import {
  PaginationContainer,
  PaginationList,
  PaginationListItem,
} from './Paginate.styles'

const Paginate = ({
  postsPerPage,
  totalPosts,
  currentPage,
  paginate,
  previousPage,
  nextPage,
}) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <PaginationContainer>
      <PaginationList>
        <PaginationListItem onClick={previousPage} className='page-number'>
          Prev
        </PaginationListItem>
        {pageNumbers.map((number) => (
          <PaginationListItem
            key={number}
            onClick={() => paginate(number)}
            className={
              'page-number ' + (number === currentPage ? 'active' : '')
            }
          >
            {number}
          </PaginationListItem>
        ))}
        <PaginationListItem onClick={nextPage} className='page-number'>
          Next
        </PaginationListItem>
      </PaginationList>
    </PaginationContainer>
  )
}

export default Paginate
