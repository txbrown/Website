import React from "react";
import styled from "styled-components";
import { Image } from "../components/base/StyledComponents";
import Img from "gatsby-image";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: block;
`;

const Cover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #fff;
  background: ${props => props.background};
  opacity: 0;
  transition: opacity 0.5s ease-out,
    transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1),
    -webkit-transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  ${Wrapper}:hover & {
    opacity: 1;
  }
`;

const Title = styled.h3`
  position: absolute;
  bottom: 0;
  left: 1em;
  color: #000;
  font-size: 2em;
`;

const ProjectCard = props => {
  const { image, highlightColor, title } = props;

  return (
    <Wrapper>
      <Img backgroundColor resolutions={image} alt="" />

      <Cover background={highlightColor}>
        <Title>{title}</Title>
      </Cover>
    </Wrapper>
  );
};

export default ProjectCard;
