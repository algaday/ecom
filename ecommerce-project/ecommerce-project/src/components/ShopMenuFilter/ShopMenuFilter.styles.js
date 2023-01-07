import styled from 'styled-components'

export const FilterWrapper = styled.div`
  height: fit-content;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
`
export const FilterHeaderText = styled.p`
  font-size: 1.5rem;
  color: black;
  font-weight: 600;
  text-align: center;
  margin-bottom: 15px;
`
export const Form = styled.form``
export const Input = styled.input``
export const Label = styled.label`
  margin-left: 5px;
  font-size: 1rem;
  font-weight: 400;
`
export const CategoryContainer = styled.div``
export const CategoryTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  margin: 10px 0;
`
export const CategoryWrapper = styled.div``
export const FilterSubmitButton = styled.button`
  cursor: pointer;
  border: none;
  font-size: 1rem;
  background-color: ${(props) => (props.reset ? 'gray' : '#f0531a')};
  color: white;
  padding: 10px 15px;
  margin-top: 15px;
  margin-left: ${(props) => (props.reset ? '15px' : '0')};
`
