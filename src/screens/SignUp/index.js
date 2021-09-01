import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Form from '../../components/Form';
import { Container } from './styles/sigup';

import { signUp } from '../../api/firebase';

import { ROUTES } from '../../constants';

const SignUpScreen = () => {
  const history = useHistory();
  const [error, setError] = useState('');

  const signUpUser = (data) => {
    signUp(data)
      .then(() => history.push(ROUTES.SIGNIN))
      .catch((error) => setError(error));
  };

  const handleSumbit = (data, event) => {
    event.preventDefault();
    signUpUser(data);
  };

  return (
    <Container>
      <Form onSubmit={handleSumbit} buttonTitle='Sign Up' formTitle='Create account' errorText={error} />
    </Container>
  );
};

export default SignUpScreen;
