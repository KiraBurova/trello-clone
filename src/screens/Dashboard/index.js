import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';

import { Base, Container, BoardName, Boards } from './styles/dashboard';

import Card from '../../components/Card';
import Input from '../../components/Input';

import useAuth from '../../hooks/useAuth';
import { createBoard, getCreatedBoards } from '../../api/firebase';

const Dashboard = () => {
  const { user } = useAuth();
  const [boardName, setBoardName] = useState('');
  const [error, setError] = useState('');
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    handleGetCreatedBoards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGetCreatedBoards = () => {
    getCreatedBoards(user.uid)
      .then((res) => setBoards(res))
      .catch((error) => setError(error));
  };

  const handleCreateBoard = () => {
    if (!boardName) return;
    const boardData = {
      userId: user.uid,
      name: boardName,
    };
    createBoard(boardData)
      .then(() => {
        setBoardName('');
        handleGetCreatedBoards();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <Base>
      <Boards>
        {!!boards.length &&
          boards.map((board) => (
            <Card key={board.name}>
              <BoardName>{board.name}</BoardName>
            </Card>
          ))}
      </Boards>
      <Card>
        <Container>
          <Input placeholder='Create board' handleOnChange={setBoardName} value={boardName} />
          <Button type='sumbit' handleOnClick={handleCreateBoard}>
            Create board
          </Button>
          {error}
        </Container>
      </Card>
    </Base>
  );
};

export default Dashboard;
