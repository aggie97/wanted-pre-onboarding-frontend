import styled from '@emotion/styled';
import { StyledCard } from '../../common/card';

export const TodoWrapper = styled(StyledCard)`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
    margin: 1rem 0;
  }
`;

export const NewTodoForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  > div {
    flex: 7;
  }
  > button {
    flex: 2;
  }
`;
