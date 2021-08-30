import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Base, List, Lists } from './styles/board';

import { createList, getLists } from '../../api/firebase';

const Board = () => {
  const { id } = useParams();
  const [addingList, setAddingList] = useState(false);
  const [listName, setListName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    handleGetLists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGetLists = () => {
    setLoading(true);
    getLists(id)
      .then((res) => setLists(res))
      .catch((error) => setError(error))
      .then(() => setLoading(false));
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
    setLoading(true);
    createList(list)
      .then((res) => handleGetLists())
      .catch((error) => setError(error))
      .then(() => setLoading(false));
  };

  return (
    <Base>
      <Button handleOnClick={handleShowAddingList} isLoading={loading}>
        Create new list
      </Button>
      <Lists>
        {lists.length &&
          lists.map((list) => {
            return (
              <>
                <List key={list.id}>
                  {list.name}
                  <Input placeholder='Enter new task'></Input>
                </List>
              </>
            );
          })}
      </Lists>
      {addingList && (
        <>
          <Input placeholder='Enter list name' value={listName} handleOnChange={setListName} />
          <Button handleOnClick={handleAddList} isLoading={loading}>
            Add list
          </Button>
        </>
      )}
      <>{error}</>
    </Base>
  );
};

export default Board;
