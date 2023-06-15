import React from 'react';
import Input from '../../common/input';
import Button from '../../common/button';
import TodoList from './todoList';
import * as S from './Todo.styles';

const TodoPresenter = (props) => {
  return (
    <S.TodoWrapper>
      <h1>My Todo List</h1>
      <S.NewTodoForm>
        <Input
          testId="new-todo-input"
          type="text"
          label="Enter your todo"
          value={props.inputValue}
          onChange={props.onChangeInput}
          fontSize="2rem"
        />
        <Button
          onClick={props.onAddTodo}
          type="button"
          testId="new-todo-add-button"
          text="추가"
        />
      </S.NewTodoForm>
      <TodoList refetch={props.refetch} todos={props.todos} />
    </S.TodoWrapper>
  );
};

export default TodoPresenter;
