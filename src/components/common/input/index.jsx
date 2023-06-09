import styled from "@emotion/styled";

const Input = ({ onChange, type, testId }) => {
  return <StyledInput onChange={onChange} type={type} data-testid={testId} />;
};

export default Input;

const StyledInput = styled.input``;
