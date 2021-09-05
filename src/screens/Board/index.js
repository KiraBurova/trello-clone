import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Scrollbars from 'rc-scrollbars';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Card from '../../components/Card';

import { Base, List, Lists, ButtonContainer, NewListContainer, TaskActionsContainer, TasksContainer, Task, ListName } from './styles/board';

import { createList, getLists, createTask } from '../../api/firebase';
import { moveItemToAnotherList, reorderItems } from '../../helpers/dragAndDrop';

const Board = () => {
  const { id } = useParams();
  const [addingList, setAddingList] = useState(false);
  const [listName, setListName] = useState('');
  const [taskName, setTaskName] = useState('');
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
    if (!listName) return;

    const list = {
      name: listName,
      id: uuidv4(),
      boardId: id,
      tasks: [],
    };

    setLoading(true);
    createList(list)
      .then(() => handleGetLists())
      .catch((error) => setError(error))
      .then(() => setLoading(false));
  };

  const handleAddTask = (listId) => () => {
    if (!taskName) return;

    const task = {
      name: taskName,
      id: uuidv4(),
      listId: listId,
    };

    setLoading(true);
    createTask(task, id)
      .then(() => handleGetLists())
      .catch((error) => setError(error))
      .then(() => setLoading(false));
  };

  const handleDragEnd = (result) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = source.droppableId;
    const dInd = destination.droppableId;

    const list = lists.find(({ id }) => id === sInd);

    if (sInd === dInd) {
      const reorderedTasks = reorderItems(list.tasks, source.index, destination.index);
      const newLists = [...lists];
      const newList = newLists.find(({ id }) => id === sInd);
      newList.tasks = reorderedTasks;
      setLists(newLists);
    } else {
      // move between lists
    }
  };

  return (
    <Base>
      <Scrollbars>
        <ButtonContainer>
          <Button handleOnClick={handleShowAddingList} isLoading={loading}>
            Create new list
          </Button>
        </ButtonContainer>
        <Lists>
          {!!lists.length &&
            lists.map((list) => {
              return (
                <Card key={list.id}>
                  <List>
                    <ListName>{list.name}</ListName>
                    <TaskActionsContainer>
                      <Input placeholder='Enter new task' value={taskName} handleOnChange={setTaskName}></Input>
                      <Button handleOnClick={handleAddTask(list.id)}>Add</Button>
                    </TaskActionsContainer>
                    <TasksContainer>
                      <Scrollbars autoHeight>
                        <DragDropContext onDragEnd={handleDragEnd}>
                          <Droppable key={list.id} droppableId={list.id}>
                            {(provided) => (
                              <div ref={provided.innerRef} {...provided.droppableProps}>
                                {!!list.tasks.length &&
                                  list.tasks.map((task, index) => (
                                    <Draggable key={task.id} draggableId={task.id} index={index}>
                                      {(provided) => (
                                        <Task ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} key={task.id}>
                                          {task.name}
                                        </Task>
                                      )}
                                    </Draggable>
                                  ))}
                                {provided.placeholder}
                              </div>
                            )}
                          </Droppable>
                        </DragDropContext>
                      </Scrollbars>
                    </TasksContainer>
                  </List>
                </Card>
              );
            })}
        </Lists>
        {addingList && (
          <Card>
            <NewListContainer>
              <Input placeholder='Enter list name' value={listName} handleOnChange={setListName} />
              <Button handleOnClick={handleAddList} isLoading={loading}>
                Add list
              </Button>
            </NewListContainer>
          </Card>
        )}
        <>{error}</>
      </Scrollbars>
    </Base>
  );
};

export default Board;
