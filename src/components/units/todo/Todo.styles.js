import styled from '@emotion/styled';

export const TodoWrapper = styled.div`
  background-color: white;
  padding: 2rem 1.5rem;
  margin: 5rem auto;

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
