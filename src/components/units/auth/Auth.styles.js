import styled from '@emotion/styled';

export const AuthWrapper = styled.div`
  width: 60%;
  margin: 5rem auto;
  padding: 2rem 1rem;
  box-shadow: 0 5px 15px 10px rgb(0 0 0 /0.3);
  border-radius: 1rem;
  text-align: center;
  background-color: #fff;

  h1 {
    font-size: 2rem;
    font-weight: 600;
    color: rebeccapurple;
    margin: 1.5rem 0;
  }

  form {
    max-width: 60%;
    width: 100%;
    min-width: 300px;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;
