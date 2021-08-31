import styled from 'styled-components';
import { keyframes } from 'styled-components';

export const spin = keyframes`
    to { 
        transform: rotate(360deg); 
    }
`;

export const Base = styled.div`
  display: flex;
  align-self: center;
  width: 1.25em;
  height: 1.25em;
  border: 0.125em solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: var(--main-light);
  animation: ${spin} 1s ease-in-out infinite;
`;
