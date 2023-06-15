import React, { useState } from 'react';
import useAuth from '../../../utils/hook/useAuth';
import TodoPresenter from './Todo.presenter';
import axios from 'axios';
import useGetTodo from '../../../utils/hook/useGetTodo';

const TodoContainer = () => {
  useAuth();

  const { todos, refetch } = useGetTodo();
  const [inputValue, setInputValue] = useState('');
  const onAddTodo = async (event) => {
    event.preventDefault();

    const data = { todo: inputValue };
    try {
      await axios({
        url: '/todos',
        baseURL: 'https://www.pre-onboarding-selection-task.shop/',
        method: 'post',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
          'Content-Type': 'application/json',
        },
        data,
      });

      await refetch();
      setInputValue('');
    } catch (error) {
      alert(error.reponse.data.message);
    }
  };

  const onChangeInput = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <TodoPresenter
      inputValue={inputValue}
      onChangeInput={onChangeInput}
      todos={todos}
      refetch={refetch}
      onAddTodo={onAddTodo}
    />
  );
};

export default TodoContainer;
