import React from 'react';
import TodoItem from './todoItem';
import styled from '@emotion/styled';

const TodoListUl = styled.ul`
  > li {
    margin: 1rem 0;
  }
`;

const TodoList = (props) => {
  return (
    <TodoListUl>
      {props.todos.map((data) => (
        <TodoItem refetch={props.refetch} key={data.id} data={data} />
      ))}
    </TodoListUl>
  );
};

export default TodoList;
