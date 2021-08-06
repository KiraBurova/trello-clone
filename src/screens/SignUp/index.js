import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Form from '../../components/Form';
import { Container } from './styles/sigup';

import firebase from '../../lib/firebase.prod';

import useMakeAsyncCall from '../../hooks/useMakeAsyncCall';

import { checkIfFormIsValid } from '../../helpers';
import { ROUTES } from '../../constants';

const SignUpScreen = () => {
  const history = useHistory();
  const [formValues, setFormValues] = useState({});
  const isValid = checkIfFormIsValid(formValues);
  const { error, isLoading, fetchData } = useMakeAsyncCall({
    asyncFunctionToRun: () => signUpUser(),
    runOnMount: false,
  });

  const signUpUser = () => {
    const { email, password } = formValues;
    return new Promise((resolve, reject) => {
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
              resolve(userId);
              history.push(ROUTES.SIGNIN);
            })
            .catch((error) => reject(error));
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
      <Form handleOnChange={handleOnChange} handleSumbit={handleSumbit} buttonTitle='Sign Up' formTitle='Create account' errorText={error.message} loading={isLoading} isValid={isValid} />
    </Container>
  );
};

export default SignUpScreen;
