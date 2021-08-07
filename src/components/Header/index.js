import React from 'react';

import { Base, Logo, LogoutButton } from './styles/header';

const Header = () => {
  return (
    <Base>
      <Logo to='/'>Trello clone</Logo>
      <LogoutButton>Logout</LogoutButton>
    </Base>
  );
};

export default Header;
