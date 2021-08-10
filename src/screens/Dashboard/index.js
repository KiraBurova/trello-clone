import React, { useState } from 'react';
import Button from '../../components/Button';

import { Base, Container } from './styles/dashboard';

import Card from '../../components/Card';
import Input from '../../components/Input';

import useAuth from '../../hooks/useAuth';
import { createBoard } from '../../api/firebase';

const Dashboard = () => {
  const { user } = useAuth();
  const [boardName, setBoardName] = useState('');
  const [error, setError] = useState('');

  const handleCreateBoard = () => {
    if (!boardName) return;
    const boardData = {
      userId: user.uid,
      name: boardName,
    };
    createBoard(boardData)
      .then(() => {
        setBoardName('');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <Base>
      <Card>
        <Container>
          <Input placeholder='Create board' handleOnChange={setBoardName} value={boardName} />
          <Button handleOnClick={handleCreateBoard}>Create board</Button>
          {error}
        </Container>
      </Card>
    </Base>
  );
};

export default Dashboard;
