import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todos, handleDeleteItem }) => {
  const handleDelete = (newTodo) => {
 console.log("llego a eliminar"+newTodo)
 handleDeleteItem(newTodo)
  };
  return (
    <ul className='list-group list-group-flush'>
      {todos.map((todo, i) => (
        <TodoListItem key={todo.id} todo={todo} index={i} handleDelete={handleDelete}/>
      ))}
    </ul>
  );
};
