import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const SignInWrapper = styled.div`
  display: grid;
  justify-content: center;
`
export const SignInContainer = styled.div`
  height: 100%;
`

export const FormWrapper = styled.div``

export const Form = styled.form`
  background: rgba(19, 35, 47, 0.9);
  padding: 40px;
  max-width: 600px;
  margin: 40px auto;
  border-radius: $br;
  box-shadow: 0 4px 10px 4px rgba(19, 35, 47, 0.3);
`
export const TopRow = styled.div``
export const FieldWrap = styled.div`
  position: relative;
  margin-bottom: 40px;
`
export const Label = styled.label`
  color: white;
  font-size: 1rem;
`
export const Input = styled.input`
  font-size: 22px;
  display: block;
  width: 100%;
  height: 100%;
  padding: 5px 10px;
  background: none;
  background-image: none;
  border: 1px solid #a0b3b0;
  color: white;
  border-radius: 0;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
  :focus {
    outline: 0;
    border-color: #1ab188;
  }
`

export const SubmitButton = styled.button`
  display: block;
  width: 100%;
  border: 0;
  outline: none;
  border-radius: 0;
  padding: 15px 0;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background: #1ab188;
  color: #ffffff;
  transition: all 0.5s ease;
  -webkit-appearance: none;
  cursor: pointer;
  &:hover,
  &:focus {
    background: #1ab188;
  }
`
export const LoginRefText = styled.p`
  color: white;
  font-size: 1rem;
  margin-top: 10px;
`
export const LoginRef = styled(Link)`
  color: white;
  font-size: 1rem;
`
