import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const Input = ({
  value,
  onChange,
  type,
  testId,
  defaultValue,
  fontSize,
  label,
}) => {
  const [isDirty, setIsDirty] = useState(false);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    setIsDirty(value);
  }, [value]);

  return (
    <InputWrapper fontSize={fontSize}>
      <InputPlaceHolder focus={focus} isDirty={isDirty}>
        {label}
      </InputPlaceHolder>
      <StyledInput
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        type={type}
        data-testid={testId}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </InputWrapper>
  );
};

export default Input;

const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  font-size: ${({ fontSize }) => fontSize || '1.5rem'};
`;

const InputPlaceHolder = styled.span`
  position: absolute;
  top: 50%;
  left: 0.5rem;

  ${({ isDirty, focus }) =>
    focus || isDirty
      ? css`
          font-size: 1rem;
          color: rebeccapurple;
          top: 0;
          transform: translateY(-50%);
          background-color: #fff;
          padding: 0 0.1rem;
        `
      : css`
          font-size: inherit;
          color: rgb(0 0 0 /0.5);
          transform: translateY(-50%);
        `}
  transition: all 0.1s ease;
  z-index: 2;
`;

const StyledInput = styled.input`
  font-size: inherit;
  outline: none;
  width: 100%;
  text-indent: 5px;
  padding: 0.5rem;
  border: 1px solid transparent;
  border-bottom: 1px solid rebeccapurple;

  :hover {
    background-color: #fff;
  }
  transition: background-color 0.2s ease-in-out;
  :focus {
    background-color: #fff;
    border: 1px solid rebeccapurple;
  }
`;
