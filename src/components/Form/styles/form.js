import styled from 'styled-components/macro';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  width: 300px;
  padding: 10px 15px;
  border: 1px solid black;
  box-sizing: border-box;
`;

export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
`;

export const Input = styled.input``;

export const Button = styled.button`
  cursor: pointer;
`;

export const ErrorText = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: red;
`;
