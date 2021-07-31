import React, { useState } from 'react';

import Form from '../../components/Form';
import { Container } from './styles/signin';

import firebase from '../../lib/firebase.prod';

import useAsyncDataFetch from '../../hooks/useAsyncDataFetch';

const SignUpScreen = () => {
  const [formValues, setFormValues] = useState({});
  const { isLoading, error, loadData } = useAsyncDataFetch({
    fetchFn: () => signInUser(),
    loadOnMount: false,
  });

  const signInUser = () => {
    const { email, password } = formValues;
    return new Promise((resolve, reject) => {
      return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
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
      <Form handleOnChange={handleOnChange} handleSumbit={handleSumbit} buttonTitle='Sign In' formTitle='Sign In' errorText={error} loading={isLoading} />
    </Container>
  );
};

export default SignUpScreen;
