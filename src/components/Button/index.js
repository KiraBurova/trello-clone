import React from 'react';

import { Base } from './styles/button';

const Button = ({ children, handleOnClick, ...rest }) => {
  return (
    <Base onClick={handleOnClick} {...rest}>
      {children}
    </Base>
  );
};

export default Button;
