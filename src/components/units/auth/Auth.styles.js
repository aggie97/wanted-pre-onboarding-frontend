import styled from '@emotion/styled';
import { StyledCard } from '../../common/card';

export const AuthWrapper = styled(StyledCard)`
  width: 60%;

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

    p {
      color: red;
    }
  }
`;
