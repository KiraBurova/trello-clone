import React from 'react';
import { useHistory } from 'react-router-dom';

import { logOut } from '../../api/firebase';
import { ROUTES } from '../../constants';
import { Base, Logo, LogoutButton } from './styles/header';

const Header = () => {
  const history = useHistory();

  const handleLogOut = () => {
    logOut().then(() => history.push(ROUTES.SIGNIN));
  };

  return (
    <Base>
      <Logo to='/'>Trello clone</Logo>
      <LogoutButton onClick={handleLogOut}>Logout</LogoutButton>
    </Base>
  );
};

export default Header;
