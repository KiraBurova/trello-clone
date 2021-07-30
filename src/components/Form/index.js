import React from 'react';

import { Container, Input, Button, Title, ErrorText, LoadingText } from './styles/form';

const Form = ({ formTitle, buttonTitle, handleSumbit, handleOnChange, errorText, loading }) => {
  return (
    <Container onSubmit={handleSumbit}>
      <Title>{formTitle}</Title>
      <Input placeholder='email' name='email' onChange={handleOnChange}></Input>
      <Input placeholder='password' name='password' type='password' onChange={handleOnChange}></Input>
      <Button>{buttonTitle}</Button>
      <ErrorText>{errorText}</ErrorText>
      <LoadingText>{loading}</LoadingText>
    </Container>
  );
};

export default Form;
