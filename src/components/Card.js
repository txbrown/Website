import { Button } from '@chakra-ui/core';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import Skrim from './Skrim';

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  object-fit: cover;
  height: 500px;
  display: block;
`;

const Content = styled.div`
  padding: 1em;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
`;

const Metadata = styled.div`
  margin-bottom: 1.1em;
  display: flex;
  justify-content: space-between;
`;

const Category = styled.span`
  font-size: 0.8rem;
  color: #b1b0b5;
`;

const CardDate = styled.time`
  color: ${props => props.theme.colorLightGrey};
`;

const Title = styled.h3`
  color: #fff;
  font-size: 2em;
  margin-bottom: 1.1em;
`;

const Description = styled.p`
  margin-bottom: 1.1em;
  color: ${props => props.theme.colorLightGrey};
`;

const Card = props => {
  const { children, description, title, date, image, category } = props;
  return (
    <Wrapper>
      <Skrim />
      <Img
        resolutions={image.resolutions}
        style={{ width: '100%', height: '100%' }}
        imgStyle={{ width: '100%', height: '100%' }}
      />

      <Content>
        <Metadata>
          <Category>{category.toUpperCase()}</Category>
          {/* <CardDate dateTime={date}>{date}</CardDate> */}
        </Metadata>

        <a href='#'>
          <Title>{title}</Title>
        </a>
        {/* <Description>{description}</Description> */}
      </Content>
      <Button
        color='brand.900'
        style={{
          position: 'absolute',
          bottom: '1rem',
          left: '1rem',
          zIndex: 100
        }}
      >
        Read blog post
      </Button>
    </Wrapper>
  );
};

export default Card;
