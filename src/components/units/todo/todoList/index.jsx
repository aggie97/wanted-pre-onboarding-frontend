import React from 'react';
import TodoItem from './todoItem';

const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map((data) => (
        <TodoItem refetch={props.refetch} key={data.id} data={data} />
      ))}
    </ul>
  );
};

export default TodoList;
