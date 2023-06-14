import axios from 'axios';
import React, { useState } from 'react';
import Button from '../../../../common/button';
import Input from '../../../../common/input';
// {
//   "id": 1,
//   "todo": "todo2",
//   "isCompleted": false,
//   "userId": 1
// },

const TodoItem = (props) => {
  const [isEditMode, setIsEditMode] = useState(false);
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

  const onClickSubmit = async (event) => {
    const todo = event.target.parentElement.children[0].value;
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
  };
  return (
    <li>
      {isEditMode ? (
        <Input
          type="text"
          testId="modify-input"
          defaultValue={props.data.todo}
        />
      ) : (
        <label>
          <input
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
        text={isEditMode ? '제출' : '수정'}
      />
      <Button
        type="button"
        onClick={isEditMode ? onClickCancel : onClickDelete}
        testId={isEditMode ? 'cancel-button' : 'delete-button'}
        text={isEditMode ? '취소' : '삭제'}
      />
    </li>
  );
};

export default TodoItem;
