import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Form from '../../components/Form';
import { Container } from './styles/sigup';

import firebase from '../../lib/firebase.prod';

import { ROUTES } from '../../constants';

const SignUpScreen = () => {
  const history = useHistory();
  const [error, setError] = useState('');

  const signUpUser = (data) => {
    const { email, password } = data;
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const userId = userCredentials.user.uid;
        const userData = { email, uid: userId };
        firebase
          .firestore()
          .collection('users')
          .doc(userId)
          .set(userData)
          .then(() => {
            history.push(ROUTES.SIGNIN);
          })
          .catch((error) => setError(error.message));
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleSumbit = (data, event) => {
    event.preventDefault();
    signUpUser(data);
  };

  return (
    <Container>
      <Form onSubmit={handleSumbit} buttonTitle='Sign Up' formTitle='Create account' errorText={error.message} />
    </Container>
  );
};

export default SignUpScreen;
