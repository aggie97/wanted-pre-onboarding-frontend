import styled from '@emotion/styled';
import React from 'react';

const Button = ({ type, testId, onClick, text }) => {
  return (
    <StyledButton type={type} data-test-id={testId} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button``;
