import React from 'react';

export const TodoListItem = ({ todo, index , handleDelete}) => {

  return (
    <li key={todo.id} className='list-group-item'>
      <p onClick={() => console.log('mark as completed')}>
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
