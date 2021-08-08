import React from 'react';

import { Base } from './styles/input';

const Input = ({ placeholder, type = 'text', handleOnChange }) => {
  return <Base onChange={(e) => handleOnChange(e.target.value)} type={type} placeholder={placeholder} />;
};

export default Input;
