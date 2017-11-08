import Link from "gatsby-link";
import styled from "styled-components";
import React from "react";

const StyledLink = styled(Link)`
  color: ${props => (props.current ? props.theme.colorPrimary : "#bdbdbd")};
  text-decoration: none;
  border-bottom: solid 1px #fff;
  transition: all 0.6s;

  :hover {
    border-bottom: solid 1px
      ${props => (props.theme ? props.theme.colorPrimary : "#33d399")};
  }
`;

export default props => <StyledLink {...props}>{props.children}</StyledLink>;
