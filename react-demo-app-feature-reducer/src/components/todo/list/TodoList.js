import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todos, handleDeleteItem, handleCrossItem }) => {
  const handleDelete = (newTodo) => {
    console.log("llego a eliminar"+newTodo)
     handleDeleteItem(newTodo)
  };
  const handleCross = (newTodo) => {
    console.log("llego a cross"+ newTodo)

     handleCrossItem(newTodo)
  };
  return (
    <ul className='list-group list-group-flush'>
      {todos.map((todo, i) => (
        <TodoListItem key={todo.id} todo={todo} index={i} handleDelete={handleDelete} handleCross={handleCross}/>
      ))}
    </ul>
  );
};
