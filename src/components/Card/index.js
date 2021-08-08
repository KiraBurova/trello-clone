import React from 'react';

import { Container } from './styles/card';

const Card = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Card;
