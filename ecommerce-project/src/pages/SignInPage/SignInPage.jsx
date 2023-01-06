import React from 'react'
import {
  FieldWrap,
  Form,
  FormWrapper,
  Input,
  Label,
  LoginRef,
  LoginRefText,
  SignInContainer,
  SignInWrapper,
  SubmitButton,
  TopRow,
} from './SignInPage.styles'
import {
  createUserDocumentFromAuth,
  createAuthUserEmailAndPassword,
} from '../../firebase/firebase'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const defaultFormFields = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
}

function SignInPage() {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { firstName, lastName, email, password } = formFields
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { user } = await createAuthUserEmailAndPassword(email, password)
      await createUserDocumentFromAuth(user, { displayName: firstName })
      setFormFields(defaultFormFields)
      navigate('/')
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('User already exists...')
      } else {
        console.log(error)
      }
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <SignInWrapper>
      <SignInContainer>
        <FormWrapper>
          <Form onSubmit={handleSubmit}>
            <TopRow>
              <FieldWrap>
                <Label>First Name*</Label>
                <Input
                  type='text'
                  required
                  autocomplete='off'
                  name='firstName'
                  value={firstName}
                  onChange={handleChange}
                />
              </FieldWrap>

              <FieldWrap>
                <Label>Last Name*</Label>
                <Input
                  type='text'
                  required
                  autocomplete='off'
                  name='lastName'
                  value={lastName}
                  onChange={handleChange}
                />
              </FieldWrap>
            </TopRow>

            <FieldWrap>
              <Label>Email Address*</Label>
              <Input
                type='email'
                required
                autocomplete='off'
                name='email'
                value={email}
                onChange={handleChange}
              />
            </FieldWrap>

            <FieldWrap>
              <Label>Set A Password*   </Label>
              <Input
                type='password'
                required
                autocomplete='off'
                name='password'
                value={password}
                onChange={handleChange}
              />
            </FieldWrap>

            <SubmitButton type='submit'>Register</SubmitButton>
            <LoginRefText>
              Already have an account. Login{' '}
              <LoginRef to='/login'>here</LoginRef>
            </LoginRefText>
          </Form>
        </FormWrapper>
      </SignInContainer>
    </SignInWrapper>
  )
}

export default SignInPage
