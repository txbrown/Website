import styled from "styled-components";
import React from "react";

export const StyledContainer = styled.div`
  padding: 0;
  margin: 0 auto;
  max-width: 720px;

  @media screen and (max-width: 480px) {
    margin: 0 40px;
  }
`;

export default ({ children, props }) => (
  <StyledContainer>{children}</StyledContainer>
);
