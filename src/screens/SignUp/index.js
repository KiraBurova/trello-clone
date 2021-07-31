import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Form from '../../components/Form';
import { Container } from './styles/sigup';

import firebase from '../../lib/firebase.prod';

import useAsyncDataFetch from '../../hooks/useAsyncDataFetch';

import { checkIfFormIsValid } from '../../helpers';
import { ROUTES } from '../../constants';

const SignUpScreen = () => {
  const history = useHistory();
  const [formValues, setFormValues] = useState({});
  const isValid = checkIfFormIsValid(formValues);
  const { isLoading, error, loadData } = useAsyncDataFetch({
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
          history.push(ROUTES.SIGNIN);
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
      <Form handleOnChange={handleOnChange} handleSumbit={handleSumbit} buttonTitle='Sign Up' formTitle='Create account' errorText={error} loading={isLoading} isValid={isValid} />
    </Container>
  );
};

export default SignUpScreen;
