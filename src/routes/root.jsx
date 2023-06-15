import React from 'react';
import { StyledCard } from '../components/common/card';
import styled from '@emotion/styled';

const Wrapper = styled(StyledCard)`
  max-width: 600px;
  width: 100%;
  min-width: 300px;

  text-align: center;
  p {
    margin: 2rem 0;
  }
  h1 {
    font-size: 2.5rem;
    font-weight: 800;
  }
`;

const Root = () => {
  return (
    <Wrapper>
      <h1>Todo List</h1>
      <p>
        <a href="/signin">로그인 하러 가기</a>
      </p>
      <p>
        <a href="/signup">회원가입 하러 가기</a>
      </p>
    </Wrapper>
  );
};

export default Root;
