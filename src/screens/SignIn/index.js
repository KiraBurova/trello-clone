import React, { useState } from 'react';

import Form from '../../components/Form';
import { Container } from './styles/signin';

import firebase from '../../lib/firebase.prod';

import useAsynDataFetch from '../../hooks/useAsynDataFetch';

const SignUpScreen = () => {
  const [formValues, setFormValues] = useState({});
  const { isLoading, error, loadData } = useAsynDataFetch({
    fetchFn: () => signinUser(),
    loadOnMount: false,
  });

  const signinUser = () => {
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
      <Form handleOnChange={handleOnChange} handleSumbit={handleSumbit} buttonTitle='Sign In' formTitle='Sign In' errorText={error} loading={isLoading} />
    </Container>
  );
};

export default SignUpScreen;
