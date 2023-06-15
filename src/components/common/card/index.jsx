import styled from '@emotion/styled';
import React from 'react';

export const StyledCard = styled.div`
  background-color: white;
  padding: 2rem 1.5rem;
  margin: 5rem auto;
  box-shadow: 0 5px 15px 10px rgb(0 0 0 /0.3);
  border-radius: 1rem;
`;

const Card = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;
