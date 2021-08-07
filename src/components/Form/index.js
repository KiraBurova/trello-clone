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
    <Base onSubmit={handleSubmit(onSubmit)}>
      <Title>{formTitle}</Title>
      <Input {...register('email', { required: true })} placeholder='Email' />
      {errors.email && <ErrorText role='alert'>Email is required</ErrorText>}
      <Input {...register('password', { required: true })} placeholder='Password' type='password' />
      {errors.password && <ErrorText role='alert'>Password is required</ErrorText>}
      <Button>{buttonTitle}</Button>
      {errorText && <ErrorText role='alert'>{errorText}</ErrorText>}
      {isSubmitting && <LoadingText>Loading...</LoadingText>}
    </Base>
  );
};

export default Form;
