export const checkIfFormIsValid = (formValues = { email: null, password: null }) => {
  if (Object.values(formValues).length === 2) {
    return Object.values(formValues).every((value) => !!value);
  }

  return false;
};
