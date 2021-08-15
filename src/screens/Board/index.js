import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { createList } from '../../api/firebase';

const Board = () => {
  const { id } = useParams();
  const [addingList, setAddingList] = useState(false);
  const [listName, setListName] = useState('');

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
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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
    </div>
  );
};

export default Board;
