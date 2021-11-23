import React from 'react'
import styled from '@emotion/styled'

function SignupForm() {
  return (
    <FormContainer className='flex justify-center p-4'>
      <Form className='flex flex-col space-y-2 border-2 p-2 rounded-md shadow-md justify-center'>
        <FormTitle>Barbershop Signup</FormTitle>
        <FormInput type="text" placeholder="First Name" required/>
        <FormInput type="text" placeholder="Last Name" required/>
        <FormInput type="text" placeholder="Email" required/>
        <FormInput type="text" placeholder="Username" required/>
        <FormInput type="password" placeholder="Password" required/>
        <FormButton className='bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded'>Signup</FormButton>
      </Form>
    </FormContainer>
  )
}

export default SignupForm

const FormContainer = styled.div``;

const Form = styled.form``;

const FormTitle = styled.h1``;

const FormInput = styled.input``;

const FormButton = styled.button``;
