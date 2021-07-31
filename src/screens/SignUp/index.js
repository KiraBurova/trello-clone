import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Form from '../../components/Form';
import { Container } from './styles/sigup';

import firebase from '../../lib/firebase.prod';

import useAsynDataFetch from '../../hooks/useAsynDataFetch';

const SignUpScreen = () => {
  const history = useHistory();
  const [formValues, setFormValues] = useState({});
  const { isLoading, error, loadData } = useAsynDataFetch({
    fetchFn: () => signUpUser(),
    loadOnMount: false,
  });

  const signUpUser = () => {
    const { email, password } = formValues;
    return new Promise((resolve, reject) => {
      return firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          resolve(user);
          history.push('/signin');
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
