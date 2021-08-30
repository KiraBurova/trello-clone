import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Form from '../../components/Form';
import { Container } from './styles/signin';

import { signIn } from '../../api/firebase';

import { ROUTES } from '../../constants';

const SignInScreen = () => {
  const history = useHistory();
  const [error, setError] = useState('');

  const signInUser = (data) => {
    signIn(data)
      .then(() => history.push(ROUTES.BOARDS))
      .catch((error) => setError(error));
  };

  const handleSumbit = (data, event) => {
    event.preventDefault();
    signInUser(data);
  };

  return (
    <Container>
      <Form onSubmit={handleSumbit} buttonTitle='Sign In' formTitle='Sign In' errorText={error} />
    </Container>
  );
};

export default SignInScreen;
