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
  margin: 0 0 0.625em 0;
  border: none;
  border-radius: var(--radius);
  font-size: 1rem;
`;

export const ErrorText = styled.p`
  color: var(--error);
  word-wrap: break-word;
  margin: 0 0 0.625em 0;
`;
