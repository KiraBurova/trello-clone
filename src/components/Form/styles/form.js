import styled from 'styled-components/macro';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: nowrap;
  height: 400px;
  width: 300px;
  padding: 10px 15px;
  border: 1px solid black;
  box-sizing: border-box;
`;

export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: 5px;
  border-radius: 4px;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 5px;
`;

export const ErrorText = styled.p`
  font-size: 1rem;
  text-align: center;
  color: red;
  word-wrap: break-word;
`;

export const LoadingText = styled.p`
  font-size: 1.2rem;
  text-align: center;
`;
