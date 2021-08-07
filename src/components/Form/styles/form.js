import styled from 'styled-components/macro';

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 25em;
  width: 25em;
  font-size: 1rem;
  padding: 0.625em 4em;
  border-radius: var(--radius);
  box-sizing: border-box;
  color: var(--main-light);
  background: var(--additional);
  background: linear-gradient(45deg, var(--additional) 0%, var(--accent) 88%);
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 1.8rem;
  margin: 1em 0;
  white-space: nowrap;
`;

export const Input = styled.input`
  padding: 0.625em;
  border: none;
  border-radius: var(--radius);
  font-size: 1rem;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 0.625em;
  border-radius: var(--radius);
  border: none;
  background-color: var(--main-dark);
  color: var(--main-light);
  font-weight: bold;
  font-size: 1.1rem;
  box-sizing: border-box;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: var(--darken-accent);
  }

  &:disabled {
    background-color: var(--disabled);
    cursor: default;
  }
`;

export const ErrorText = styled.p`
  color: var(--error);
  word-wrap: break-word;
`;

export const LoadingText = styled.p`
  font-size: 1.2rem;
`;
