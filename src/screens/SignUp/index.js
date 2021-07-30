import React, { useState } from 'react';
import Form from '../../components/Form';
import { Container } from './styles/sigup';

import firebase from '../../lib/firebase.prod';

import useErrors from '../../hooks/useErrors';

const SignUpScreen = () => {
  const [formValues, setFormValues] = useState({});
  const { data, isLoading, error, loadData } = useErrors({
    fetchFn: () => registerUser(),
    loadOnMount: false,
  });

  const registerUser = () => {
    const { email, password } = formValues;
    return new Promise((resolve, reject) => {
      return firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          resolve(user);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    loadData();
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <Container>
      <Form handleOnChange={handleOnChange} handleSumbit={handleSumbit} buttonTitle='Sign Up' formTitle='Sign Up' errorText={error} loading={isLoading} />
    </Container>
  );
};

export default SignUpScreen;
