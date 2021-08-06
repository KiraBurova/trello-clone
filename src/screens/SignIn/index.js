import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Form from '../../components/Form';
import { Container } from './styles/signin';

import firebase from '../../lib/firebase.prod';

import useFetch from '../../hooks/useMakeAsyncCall';

import { checkIfFormIsValid } from '../../helpers';
import { ROUTES } from '../../constants';

const SignInScreen = () => {
  const history = useHistory();
  const [formValues, setFormValues] = useState({});
  const isValid = checkIfFormIsValid(formValues);
  const { error, isLoading, fetchData } = useFetch({
    asyncFunctionToRun: () => signInUser(),
    runOnMount: false,
  });

  const signInUser = () => {
    const { email, password } = formValues;

    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          resolve(user);
          history.push(ROUTES.DASHBOARD);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    fetchData();
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
      <Form handleOnChange={handleOnChange} handleSumbit={handleSumbit} buttonTitle='Sign In' formTitle='Sign In' errorText={error.message} loading={isLoading} isValid={isValid} />
    </Container>
  );
};

export default SignInScreen;
