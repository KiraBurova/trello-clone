import React, { useEffect, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { Base, Container, BoardName, BoardsList, Error } from './styles/boards';

import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';

import useAuth from '../../hooks/useAuth';
import { createBoard, getCreatedBoards } from '../../api/firebase';
import { ROUTES } from '../../constants';

const Boards = () => {
  const { user } = useAuth();
  const [boardName, setBoardName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    const boardData = {
      userId: user.uid,
      name: boardName,
      id: uuidv4(),
      lists: [],
    };
    createBoard(boardData)
      .then(() => {
        setBoardName('');
        handleGetCreatedBoards();
      })
      .catch((error) => {
        setError(error);
      })
      .then(() => setLoading(false));
  };

  return (
    <Base>
      <BoardsList>
        {!!boards.length &&
          boards.map((board) => (
            <Card key={board.id}>
              <BoardName to={`${ROUTES.BOARD}/${board.id}`}>{board.name}</BoardName>
            </Card>
          ))}
      </BoardsList>
      <Card>
        <Container>
          <Input placeholder='Create board' handleOnChange={setBoardName} value={boardName} />
          <Button type='sumbit' handleOnClick={handleCreateBoard} isLoading={loading}>
            Create board
          </Button>
          {error && <Error>{error}</Error>}
        </Container>
      </Card>
    </Base>
  );
};

export default Boards;
