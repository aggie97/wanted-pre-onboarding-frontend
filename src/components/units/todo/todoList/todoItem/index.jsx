import axios from 'axios';
import React, { useState } from 'react';
import Button from '../../../../common/button';
import Input from '../../../../common/input';
import styled from '@emotion/styled';

const TodoItem = (props) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [todoValue, setTodoValue] = useState(props.data.todo);

  const onClickCheck = async () => {
    try {
      await axios({
        url: `/todos/${props.data.id}`,
        baseURL: 'https://www.pre-onboarding-selection-task.shop/',
        method: 'put',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
          'Content-Type': 'application/json',
        },
        data: {
          todo: props.data.todo,
          isCompleted: !props.data.isCompleted,
        },
      });

      await props.refetch();
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const onClickEdit = () => {
    setIsEditMode(true);
  };
  const onClickDelete = async () => {
    try {
      await axios({
        url: `/todos/${props.data.id}`,
        baseURL: 'https://www.pre-onboarding-selection-task.shop/',
        method: 'delete',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
        },
      });

      await props.refetch();
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const onClickSubmit = async () => {
    const todo = todoValue;
    try {
      await axios({
        url: `/todos/${props.data.id}`,
        baseURL: 'https://www.pre-onboarding-selection-task.shop/',
        method: 'put',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
          'Content-Type': 'application/json',
        },
        data: {
          todo,
          isCompleted: props.data.isCompleted,
        },
      });
      await props.refetch();
      setIsEditMode(false);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  const onClickCancel = () => {
    setIsEditMode(false);
    setTodoValue(props.data.todo);
  };

  return (
    <TodoItemLi>
      {isEditMode ? (
        <Input
          type="text"
          label="todo"
          testId="modify-input"
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
          fontSize="2rem"
        />
      ) : (
        <label>
          <input
            id="check"
            type="checkbox"
            checked={props.data.isCompleted}
            onChange={onClickCheck}
          />
          <span>{props.data.todo}</span>
        </label>
      )}
      <Button
        type="button"
        onClick={isEditMode ? onClickSubmit : onClickEdit}
        testId={isEditMode ? 'submit-button' : 'modify-button'}
        text={isEditMode ? 'O' : '수정'}
      />
      <Button
        type="button"
        onClick={isEditMode ? onClickCancel : onClickDelete}
        testId={isEditMode ? 'cancel-button' : 'delete-button'}
        text={isEditMode ? 'X' : '삭제'}
      />
    </TodoItemLi>
  );
};

export default TodoItem;

const TodoItemLi = styled.li`
  display: flex;

  > :not(button) {
    flex: 8;
  }

  > button {
    flex: 1;
  }

  label {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    background-color: #ddd;

    input {
      width: 50px;
    }
  }

  > button:nth-of-type(1) {
    background-color: #1c1;
  }
  > button:nth-of-type(2) {
    background-color: #c11;
  }
`;
