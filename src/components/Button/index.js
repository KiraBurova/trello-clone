import React from 'react';

import { Base } from './styles/button';

const Button = ({ children, handleOnClick }) => {
  return <Base onClick={handleOnClick}>{children}</Base>;
};

export default Button;
