import styled from 'styled-components/macro';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Base = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  border-bottom: 1px solid var(--main-dark);
`;

export const Logo = styled(ReachRouterLink)`
  color: var(--main-dark);
  font-size: 2rem;
  text-decoration: none;
`;

export const LogoutButton = styled.button`
  background-color: var(--accent);
  color: var(--main-light);
  border: 0;
  font-size: 0.9rem;
  border-radius: 3px;
  padding: 0.5em 1.2em;
  text-decoration: none;
  transition: background-color var(--transition);
  cursor: pointer;

  &:hover {
    background: var(--darken-accent);
  }
`;
