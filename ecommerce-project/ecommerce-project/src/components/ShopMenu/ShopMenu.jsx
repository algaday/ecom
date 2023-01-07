import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../../store/totalProductsSlice/totalProductsSlice'
import FullMenuItem from '../FullMenuItem/FullMenuItem'
import Paginate from '../Paginate/Paginate'
import { MenuContainer, MenuWrapper } from './ShopMenu.styles'

const ShopMenu = () => {
  const products = useSelector((state) => state.menu.filteredFoods)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [])

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(12)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = products?.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const nextPage = () => {
    if (currentPage !== Math.ceil(products?.length / postsPerPage)) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <MenuWrapper>
      <MenuContainer>
        {products ? (
          currentPosts?.map((item) => (
            <FullMenuItem key={item.id} prop={item} />
          ))
        ) : (
          <h2>Loading...</h2>
        )}
      </MenuContainer>
      <Paginate
        postsPerPage={postsPerPage}
        totalPosts={products?.length}
        currentPage={currentPage}
        paginate={paginate}
        previousPage={previousPage}
        nextPage={nextPage}
      />
    </MenuWrapper>
  )
}

export default ShopMenu
