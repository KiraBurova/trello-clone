import React, { useState } from 'react';
import Form from '../../components/Form';
import { Container } from './styles/sigup';

import firebase from '../../lib/firebase.prod';

import useErrors from '../../hooks/useErrors';

const SignUpScreen = () => {
  const [formValues, setFormValues] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useErrors(formValues, submitted);

  const handleSumbit = (e) => {
    e.preventDefault();
    const { email, password } = formValues;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
      })
      .catch((error) => {
        setErrors(error.message);
      })
      .then(() => setSubmitted(true));
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
      <Form handleOnChange={handleOnChange} handleSumbit={handleSumbit} buttonTitle='Sign Up' formTitle='Sign Up' errorText={errors} />
    </Container>
  );
};

export default SignUpScreen;
