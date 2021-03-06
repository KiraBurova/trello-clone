import styled from 'styled-components';

export const Base = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0.625em;
  min-height: 44px;
  border-radius: var(--radius);
  border: none;
  background-color: var(--main-dark);
  color: var(--main-light);
  font-weight: bold;
  font-size: 1.1rem;
  box-sizing: border-box;
  transition: background-color var(--transition);

  &:hover {
    background-color: var(--darken-dark);
  }

  &:disabled {
    background-color: var(--disabled);
    cursor: default;
  }
`;
