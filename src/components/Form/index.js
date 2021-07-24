import React from 'react';

import { Container, Input, Button, Title } from './styles/form';

const Form = ({ formTitle, buttonTitle }) => {
  return (
    <Container>
      <Title>{formTitle}</Title>
      <Input placeholder='email'></Input>
      <Input placeholder='password'></Input>
      <Button>{buttonTitle}</Button>
    </Container>
  );
};

export default Form;
