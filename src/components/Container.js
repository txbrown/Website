import React from 'react';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  padding: 2rem 0;
  margin: 0 auto;
  max-width: 720px;

  @media screen and (max-width: 480px) {
    margin: 0 16px;
  }
`;

export default ({ children, props }) => (
  <StyledContainer>{children}</StyledContainer>
);
