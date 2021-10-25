import React from 'react';

export const TodoListItem = ({ todo, index , handleDelete, handleCross}) => {
  const handleCrossItem = (newTodo) => {
    console.log("llego a cross"+ newTodo)
     handleCross(newTodo)
  };
  return (
    <li key={todo.id} className='list-group-item'>
      <p onClick={() => handleCrossItem(todo)} className={ todo.done===true ? 'complete':'notComplete'} >
        {index + 1}. {todo.desc}
      </p>
      <button
        className='btn btn-danger'
        onClick={() => handleDelete(todo)}
      >
        Borrar
      </button>
    </li>
  );
};
