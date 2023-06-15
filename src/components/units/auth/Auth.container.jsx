import React, { useState } from 'react';
import AuthPresenter from './Auth.presenter';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../utils/hook/useAuth';

const ACCESS_TOKEN = 'accessToken';

const AuthContainer = ({ isSignIn }) => {
  useAuth();
  const naviagtor = useNavigate();

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isValid, setIsValid] = useState(false);
  const onSubmit = async (event) => {
    event.preventDefault();
    const data = formData;
    try {
      const result = await axios({
        method: 'post',
        baseURL: 'https://www.pre-onboarding-selection-task.shop',
        url: `/auth/sign${isSignIn ? 'in' : 'up'}`,
        headers: {
          'Content-Type': `application/json`,
        },
        data,
      });
      if (result.data)
        localStorage.setItem(ACCESS_TOKEN, result.data.access_token);
      alert(`${isSignIn ? '로그인' : '회원 가입'}이 완료되었습니다.`);
      naviagtor(isSignIn ? '/todo' : '/signin');
    } catch (error) {
      const errorMessage = error.response.data.message;
      alert(errorMessage);
      if (errorMessage === '동일한 이메일이 이미 존재합니다.')
        naviagtor('/signin');
    }
  };

  const onChangeFormData = (event) => {
    const [email, password] = event.target.parentElement.parentElement;
    setIsValid(email.value.includes('@') && password.value.length > 7);
    setFormData({ ...formData, [event.target.type]: event.target.value });
  };
  return (
    <AuthPresenter
      isValid={isValid}
      isSignIn={isSignIn}
      formData={formData}
      onChangeFormData={onChangeFormData}
      onSubmit={onSubmit}
    />
  );
};

export default AuthContainer;
