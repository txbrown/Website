import styled from "styled-components";
import React from "react";

const Title = styled.h2`
  font-size: ${props => (props.theme ? props.theme.fontMedium : "32px")};
`;

export default Title;
