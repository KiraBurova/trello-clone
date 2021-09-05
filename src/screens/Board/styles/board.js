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
  gap: 15px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 250px;
  width: 100%;
`;

export const ListName = styled.h2`
  margin: 0 0 0.5em 0;
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

export const TasksContainer = styled.div`
  width: 100%;
`;

export const Task = styled.div`
  width: 100%;
  font-size: 1.1rem;
  border: 0.1em solid var(--main-dark);
  border-radius: var(--radius);
  padding: 0.3em 0.4em;
  margin-top: 0.5em;
  background-color: var(--main-light);
`;
