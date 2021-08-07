import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Form from '../../components/Form';
import { Container } from './styles/signin';

import firebase from '../../lib/firebase.prod';

import { ROUTES } from '../../constants';

const SignInScreen = () => {
  const history = useHistory();
  const [error, setError] = useState('');

  const signInUser = (data) => {
    const { email, password } = data;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push(ROUTES.DASHBOARD);
      })
      .catch((error) => {
        setError(error.message);
      });
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
