import styled from '@emotion/styled';

const Input = ({ value, onChange, type, testId, defaultValue }) => {
  return (
    <StyledInput
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      type={type}
      data-testid={testId}
    />
  );
};

export default Input;

const StyledInput = styled.input``;
