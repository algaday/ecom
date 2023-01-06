import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import FullMenuItem from '../FullMenuItem/FullMenuItem'
import {
  CategoriesButtons,
  CategoryMenu,
  CollectionCategories,
  LeftArrow,
  RightArrow,
} from './DishesCollection.styles'

function DishesCollection() {
  const allProducts = useSelector((state) => state.menu.allProducts)
  const [value, setValue] = useState('lunch')
  const [currentPage, setCurrentPage] = useState(1)
  const [dishesPerPage] = useState(6)
  let filteredMenu = allProducts?.filter((item) => item.categories === value)

  const indexOfLastPost = currentPage * dishesPerPage
  const indexOfFirstPost = indexOfLastPost - dishesPerPage
  const currentPosts = filteredMenu?.slice(indexOfFirstPost, indexOfLastPost)

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const nextPage = () => {
    if (currentPage !== Math.ceil(filteredMenu.length / dishesPerPage)) {
      setCurrentPage(currentPage + 1)
    }
  }
  const checkValue = (e) => {
    if (value === e.target.value) {
      return
    }
    setValue(e.target.value)
    setCurrentPage(1)
  }

  return (
    <>
      <CollectionCategories>
        <LeftArrow onClick={previousPage} />

        <CategoriesButtons
          value={'breakfast'}
          onClick={checkValue}
          className={value === 'breakfast' ? 'active' : null}
        >
          Breakfast
        </CategoriesButtons>
        <CategoriesButtons
          value={'lunch'}
          onClick={checkValue}
          className={value === 'lunch' ? 'active' : null}
        >
          Lunch
        </CategoriesButtons>
        <CategoriesButtons
          value={'dinner'}
          onClick={checkValue}
          className={value === 'dinner' ? 'active' : null}
        >
          Dinner
        </CategoriesButtons>
        <RightArrow onClick={nextPage} />
      </CollectionCategories>
      <CategoryMenu>
        {allProducts ? (
          currentPosts.map((item) => <FullMenuItem key={item.id} prop={item} />)
        ) : (
          <h2>Loading...</h2>
        )}
      </CategoryMenu>
    </>
  )
}

export default DishesCollection
