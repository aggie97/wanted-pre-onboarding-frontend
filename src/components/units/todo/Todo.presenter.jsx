import React from 'react';
import Input from '../../common/input';
import Button from '../../common/button';
import TodoList from './todoList';

const TodoPresenter = (props) => {
  return (
    <>
      <Input
        testId="new-todo-input"
        type="text"
        value={props.inputValue}
        onChange={props.onChangeInput}
      />
      <Button
        onClick={props.onAddTodo}
        type="button"
        testId="new-todo-add-button"
        text="추가"
      />
      <TodoList refetch={props.refetch} todos={props.todos} />
    </>
  );
};

export default TodoPresenter;
