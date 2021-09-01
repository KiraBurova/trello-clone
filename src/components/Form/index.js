import React from 'react';
import { useForm } from 'react-hook-form';

import { Base, Input, Title, ErrorText } from './styles/form';

import Button from '../Button';

const Form = ({ formTitle, buttonTitle, onSubmit, errorText }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <Base onSubmit={handleSubmit(onSubmit)}>
      <Title data-testid='form-title'>{formTitle}</Title>
      <Input {...register('email', { required: true })} placeholder='Email' name='email' />
      {errors.email && <ErrorText role='alert'>Email is required</ErrorText>}
      <Input {...register('password', { required: true })} placeholder='Password' type='password' name='password' />
      {errors.password && <ErrorText role='alert'>Password is required</ErrorText>}
      <Button isLoading={isSubmitting}>{buttonTitle}</Button>
      {errorText && <ErrorText role='alert'>{errorText}</ErrorText>}
    </Base>
  );
};

export default Form;
