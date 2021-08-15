import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { createList, getLists } from '../../api/firebase';

const Board = () => {
  const { id } = useParams();
  const [addingList, setAddingList] = useState(false);
  const [listName, setListName] = useState('');
  const [error, setError] = useState('');
  const [lists, setLists] = useState([]);

  useEffect(() => {
    handleGetLists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGetLists = () => {
    getLists(id)
      .then((res) => setLists(res))
      .catch((error) => setError(error));
  };

  const handleShowAddingList = () => {
    setAddingList(true);
  };

  const handleAddList = () => {
    const list = {
      name: listName,
      id: uuidv4(),
      boardId: id,
      tasks: [],
    };
    createList(list)
      .then((res) => handleGetLists())
      .catch((error) => setError(error));
  };

  return (
    <div>
      <Button handleOnClick={handleShowAddingList}>Create new list</Button>
      {addingList && (
        <div>
          <Input placeholder='Enter list name' value={listName} handleOnChange={setListName} />
          <Button handleOnClick={handleAddList}>Add list</Button>
        </div>
      )}
      <>{error}</>
    </div>
  );
};

export default Board;
