import React from 'react';

import { Base, Input, Button, Title, ErrorText, LoadingText } from './styles/form';

const Form = ({ formTitle, buttonTitle, handleSumbit, handleOnChange, errorText, loading, isValid }) => {
  return (
    <Base onSubmit={handleSumbit} data-testid='form'>
      <Title>{formTitle}</Title>
      <Input placeholder='Email' name='email' onChange={handleOnChange}></Input>
      <Input placeholder='Password' name='password' type='password' onChange={handleOnChange}></Input>
      <Button disabled={!isValid}>{buttonTitle}</Button>
      <ErrorText>{errorText}</ErrorText>
      <LoadingText>{loading}</LoadingText>
    </Base>
  );
};

export default Form;
