import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

const Button = ({ type, testId, onClick, text, disabled }) => {
  return (
    <StyledButton
      type={type}
      data-test-id={testId}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  width: 100%;
  border: none;
  outline: none;
  font-size: 1.25rem;
  font-weight: 600;

  padding: 1rem;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  ${(props) =>
    props.disabled
      ? css`
          cursor: not-allowed;
          opacity: 0.5;
        `
      : css`
          cursor: pointer;
          opacity: 1;
          :hover {
            background-color: #542288;
          }
        `}
  color: white;
  background-color: #653399;
`;
