import styled from 'styled-components/macro';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Base = styled.div`
  margin: 50px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100px;
`;

export const BoardName = styled(ReachRouterLink)`
  display: flex;
  font-weight: bold;
  font-size: 1.1rem;
  text-decoration: none;
  justify-content: center;
`;

export const Boards = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
`;
