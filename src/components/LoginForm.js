import React, { useReducer, useContext} from 'react'
import styled from '@emotion/styled'



function LoginForm() {
  return (
    <FormContainer className='flex justify-center p-4'>
      <Form className='flex flex-col space-y-2 border-2 p-2 rounded-md shadow-md justify-center'>
        <FormTitle>Barbershop Login</FormTitle>
        <FormInput type="text" placeholder="Username" />
        <FormInput type="password" placeholder="Password" />
        <FormButton className='bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded'>Login</FormButton>
      </Form>
    </FormContainer>
  )
}

export default LoginForm

const FormContainer = styled.div``;

const Form = styled.form``;

const FormTitle = styled.h1``;

const FormInput = styled.input``;

const FormButton = styled.button``;



