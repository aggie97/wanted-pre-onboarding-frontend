import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useGetTodo() {
  const [todos, setTodos] = useState([]);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    getTodos();
  }, [trigger]);

  async function getTodos() {
    await axios({
      baseURL: 'https://www.pre-onboarding-selection-task.shop/',
      url: '/todos',
      method: 'get',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      },
    }).then((res) => setTodos(res.data));
  }

  async function refetch() {
    setTrigger((prev) => !prev);
  }

  return { todos, refetch };
}
