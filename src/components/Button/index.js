import React from 'react';

import Loader from '../Loader';

import { Base } from './styles/button';

const Button = ({ children, handleOnClick, isLoading, ...rest }) => {
  return (
    <Base onClick={handleOnClick} {...rest}>
      {isLoading ? <Loader /> : children}
    </Base>
  );
};

export default Button;
