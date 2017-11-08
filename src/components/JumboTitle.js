import styled from "styled-components";
import React from "react";

const JumboTitle = styled.h1`
  font-size: ${props => (props.theme ? props.theme.fontLarge : "36px")};
`;

export default JumboTitle;
