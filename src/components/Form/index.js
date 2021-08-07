import React from 'react';
import { useForm } from 'react-hook-form';

import { Base, Input, Button, Title, ErrorText, LoadingText } from './styles/form';

const Form = ({ formTitle, buttonTitle, onSubmit, handleOnChange, errorText }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <Base onSubmit={handleSubmit(onSubmit)} data-testid='form'>
      <Title>{formTitle}</Title>
      <Input {...register('email', { required: true })} placeholder='Email' onChange={handleOnChange} />
      <ErrorText>{errors.email?.type === 'required' && 'Email is required'}</ErrorText>
      <Input {...register('password', { required: true })} placeholder='Password' type='password' onChange={handleOnChange} />
      <ErrorText>{errors.password?.type === 'required' && 'Password is required'}</ErrorText>
      <Button>{buttonTitle}</Button>
      <ErrorText>{errorText}</ErrorText>
      {isSubmitting && <LoadingText>Loading...</LoadingText>}
    </Base>
  );
};

export default Form;
