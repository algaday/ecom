import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilteredMenu } from '../../store/totalProductsSlice/totalProductsSlice'
import {
  CategoryContainer,
  CategoryTitle,
  CategoryWrapper,
  FilterWrapper,
  FilterHeaderText,
  Form,
  Input,
  Label,
  FilterSubmitButton,
} from './ShopMenuFilter.styles'

const defaulValue = {
  price: '1100',
  category: 'all',
  people: '0',
  healthy: false,
  popular: false,
  glutenFree: false,
  vegan: false,
  vegetarian: false,
}

function ShopMenuFilter() {
  const allProducts = useSelector((state) => state.menu.allProducts)
  const dispatch = useDispatch()
  const [formInfo, setFormInfo] = useState(defaulValue)

  const handleSubmit = (e) => {
    e.preventDefault()

    let foods = allProducts
      ? allProducts
          .filter((item) => item.pricePerServing < parseInt(formInfo.price))
          .filter((item) => {
            return formInfo.category === 'all'
              ? item
              : item.categories === formInfo.category
          })
          .filter((item) => {
            if (formInfo.people === '0') return item.servings > 0
            else if (formInfo.people === '7') return item.servings > 6
            else return item.servings === parseInt(formInfo.people)
          })
          .filter((item) =>
            formInfo.healthy ? item.veryHealthy === true : item
          )
          .filter((item) =>
            formInfo.popular ? item.veryPopular === true : item
          )
          .filter((item) =>
            formInfo.glutenFree ? item.glutenFree === true : item
          )
          .filter((item) => (formInfo.vegan ? item.vegan === true : item))
          .filter((item) =>
            formInfo.vegetarian ? item.vegetarian === true : item
          )
      : allProducts
    console.log(foods)

    dispatch(setFilteredMenu(foods))
  }

  const handleInputChange = (event) => {
    const target = event.target
    const value = target.value
    const name = target.name

    setFormInfo({
      ...formInfo,
      [name]: value,
    })
  }

  return (
    <FilterWrapper>
      <FilterHeaderText>Filter foods</FilterHeaderText>
      <Form onSubmit={handleSubmit}>
        <Label>Maximum Price</Label>
        <Input
          type='range'
          min='0'
          max='1100'
          name='price'
          onInput={(e) => {
            handleInputChange(e)
          }}
        />
        ${formInfo.price}
        <CategoryContainer>
          <CategoryTitle>Category:</CategoryTitle>
          <CategoryWrapper>
            <div>
              <Input
                type='radio'
                name='category'
                value='all'
                checked={formInfo.category === 'all' ? true : null}
                onChange={handleInputChange}
              />
              <Label htmlFor='all'>All</Label>
            </div>
            <div>
              <Input
                type='radio'
                name='category'
                value='breakfast'
                checked={formInfo.category === 'breakfast' ? true : null}
                onChange={handleInputChange}
              />
              <Label htmlFor='breakfast'>Breakfast</Label>
            </div>
            <div>
              <Input
                type='radio'
                name='category'
                value='lunch'
                checked={formInfo.category === 'lunch' ? true : null}
                onChange={handleInputChange}
              />
              <Label htmlFor='lunch'>Lunch</Label>
            </div>
            <div>
              <Input
                type='radio'
                name='category'
                value='dinner'
                onChange={handleInputChange}
              />
              <Label htmlFor='dinner'>Dinner</Label>
            </div>
          </CategoryWrapper>
        </CategoryContainer>
        <CategoryContainer>
          <CategoryTitle>Number of people:</CategoryTitle>
          <CategoryWrapper>
            <div>
              <Input
                type='radio'
                name='people'
                value={0}
                checked={formInfo.people === 0 ? true : null}
                onChange={handleInputChange}
              />
              <Label htmlFor='0'>Not important</Label>
            </div>
            <div>
              <Input
                type='radio'
                name='people'
                value={2}
                checked={formInfo.people === 2 ? true : null}
                onChange={handleInputChange}
              />
              <Label htmlFor='2'>2</Label>
            </div>
            <div>
              <Input
                type='radio'
                name='people'
                value={4}
                checked={formInfo.people === 4 ? true : null}
                onChange={handleInputChange}
              />
              <Label htmlFor='4'>{4}</Label>
            </div>
            <div>
              <Input
                type='radio'
                name='people'
                value={6}
                checked={formInfo.people === 6 ? true : null}
                onChange={handleInputChange}
              />
              <Label htmlFor='6'>6</Label>
            </div>
            <div>
              <Input
                type='radio'
                name='people'
                value={7}
                checked={formInfo.people === 7 ? true : null}
                onChange={handleInputChange}
              />
              <Label htmlFor='7'>6&#60;</Label>
            </div>
          </CategoryWrapper>
        </CategoryContainer>
        <CategoryContainer>
          <CategoryTitle>Additional:</CategoryTitle>
          <CategoryWrapper>
            <div>
              <Input
                type='checkbox'
                id='healthy'
                name='healthy'
                onChange={() =>
                  setFormInfo({ ...formInfo, healthy: !formInfo.healthy })
                }
              />
              <Label htmlFor='healthy'>Healthy</Label>
            </div>

            <div>
              <Input
                type='checkbox'
                id='popular'
                name='popular'
                onChange={() =>
                  setFormInfo({ ...formInfo, popular: !formInfo.popular })
                }
              />
              <Label htmlFor='popular'>Popular</Label>
            </div>

            <div>
              <Input
                type='checkbox'
                id='vegan'
                name='vegan'
                onChange={() =>
                  setFormInfo({ ...formInfo, vegan: !formInfo.vegan })
                }
              />
              <Label htmlFor='vegan'>Vegan</Label>
            </div>

            <div>
              <Input
                type='checkbox'
                id='vegetarian'
                name='vegetarian'
                onChange={() =>
                  setFormInfo({ ...formInfo, vegetarian: !formInfo.vegetarian })
                }
              />
              <Label htmlFor='vegetarian'>Vegetarian</Label>
            </div>

            <div>
              <Input
                type='checkbox'
                id='glutenFree'
                name='glutenFree'
                onChange={() =>
                  setFormInfo({ ...formInfo, glutenFree: !formInfo.glutenFree })
                }
              />
              <Label htmlFor='glutenFree'>Gluten Free</Label>
            </div>
          </CategoryWrapper>
        </CategoryContainer>
        <FilterSubmitButton type='submit'>Filter</FilterSubmitButton>
        <FilterSubmitButton
          type='button'
          reset
          onClick={() => {
            dispatch(setFilteredMenu(allProducts))
            setFormInfo(defaulValue)
          }}
        >
          Reset
        </FilterSubmitButton>
      </Form>
    </FilterWrapper>
  )
}

export default ShopMenuFilter
