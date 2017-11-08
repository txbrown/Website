import styled from "styled-components";
import React from "react";

export const StyledContainer = styled.div`
  padding: 0;
  margin: 0 80px;
  max-width: 1200px;

  @media screen and (max-width: 480px) {
    margin: 0 auto;
  }
`;

export default ({ children, props }) => (
  <StyledContainer>{children}</StyledContainer>
);
