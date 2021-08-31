import styled from 'styled-components/macro';

export const Base = styled.div`
  margin: 50px;
  height: 100%;
  overflow-x: auto;
  box-sizing: border-box;
`;

export const ButtonContainer = styled.div`
  margin-bottom: 1em;
`;

export const Lists = styled.div`
  display: flex;
  margin-bottom: 1em;
`;

export const List = styled.div`
  display: flex;
  align-items: flex-start;
  min-height: 250px;
  width: 100%;
`;

export const NewListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 120px;
`;

export const TaskActionsContainer = styled.div`
  display: flex;
`;
