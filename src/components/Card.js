import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const Wrapper = styled.div``;

const Header = styled.div`
  height: 220px;
  background: lightgrey;
  background: url(${props => props.image});
  background-size: cover;
`;

const Content = styled.div`
  padding: 1em 0;
`;

const Metadata = styled.div`
  margin-bottom: 1.1em;
  display: flex;
  justify-content: space-between;
`;

const Category = styled.span``;

const CardDate = styled.time`
  color: ${props => props.theme.colorLightGrey};
`;

const Title = styled.h3`
  color: ${props => props.theme.colorPrimary};
  margin-bottom: 1.1em;
  opacity: 0.8;
  transition: opacity 0.6s;
  :hover {
    opacity: 1;
  }
`;

const Description = styled.p`
  margin-bottom: 1.1em;
  color: ${props => props.theme.colorLightGrey};
`;

const Card = props => {
  const { children, description, title, date, image, category } = props;
  return (
    <Wrapper>
      <Header image={image} />
      <Content>
        <Metadata>
          <Category>{category}</Category>
          <CardDate dateTime={date}>{date}</CardDate>
        </Metadata>

        <a href="#">
          <Title>{title}</Title>
        </a>
        <Description>{description}</Description>
      </Content>
    </Wrapper>
  );
};

export default Card;
