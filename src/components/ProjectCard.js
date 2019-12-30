import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: block;
  height: 400px;
  object-fit: cover;
`;

const StyledImage = styled(Img)`
  width: 100%;
`;

const Title = styled.h3`
  position: absolute;
  bottom: 0;
  left: 1em;
  color: #fff;
  font-size: 2em;
  z-index: 100;
`;

const Skrim = styled.div`
  background: linear-gradient(transparent, #191919, #000);
  opacity: 0.3;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
`;

const ProjectCard = props => {
  const { image, highlightColor, title } = props;

  return (
    <Wrapper>
      <Skrim />
      <Img
        backgroundColor
        resolutions={image}
        alt=''
        style={{ width: '100%', height: '100%' }}
        imgStyle={{ width: '100%', height: '100%' }}
      />

      <Title>{title}</Title>
    </Wrapper>
  );
};

export default ProjectCard;
