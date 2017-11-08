import React from "react";
import Link from "gatsby-link";
import Container from "../components/Container";
import JumboTitle from "../components/JumboTitle";
import styled from "styled-components";
import Title from "../components/Title";
import photoCanvasImage from "../assets/images/project_1.png";
import cardsMenuConcept from "../assets/images/project_2.png";
import blog1Image from "../assets/images/blog_post_1.png";
import Card from "../components/Card";
import ProjectCard from "../components/ProjectCard";
import { Flex, Box } from "grid-styled";

const SiteTile = JumboTitle.extend`
  ::after {
    content: " ";
    border: solid #e0e0e0 1px;
    display: block;
    margin: 2em 0;
    width: 35%;
  }
`;

const Intro = styled.div`
  color: #bdbdbd;
  width: 50%;
`;

const ProfileSection = styled.section`
  margin-bottom: 3.7em;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 6.7em;
`;

const ProjectList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 2em;
`;

const Item = styled.li`
  width: 50%;
`;

const MoreButton = styled.a`
  color: ${props => props.theme.colorPrimary};
  opacity: 0.8;
  margin-top: 2.3em;
  :hover {
    opacity: 1;
  }

  :after {
    width: 0%;
    content: " ";
    border: solid 1px #fff;
    display: block;
    margin-top: 2px;
    opacity: 1;
    margin: 0 auto;
    transition: all 0.6s ease-in-out;
  }

  :hover:after {
    border-color: ${props => props.theme.colorPrimary};
    width: 100%;
  }

  :visited {
    color: ${props => props.theme.colorPrimary};
  }
`;

const IndexPage = () => (
  <Container>
    <ProfileSection>
      <SiteTile style={{}}>Ricardo Abreu</SiteTile>
      <Intro>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et
        massa sit amet ante vehicula tempor non eu orci.
      </Intro>
    </ProfileSection>

    <Section>
      <Title>Projects</Title>

      <ProjectList>
        <Item>
          <ProjectCard
            image={photoCanvasImage}
            title="PhotoCanvas - UWP"
            highlightcColor="#ffeb5c"
          />
        </Item>
        <Item>
          <ProjectCard
            image={cardsMenuConcept}
            title="Cards Menu Concept"
            highlightcColor="#33D399"
          />
        </Item>
      </ProjectList>
      <Flex justify="center">
        <Box>
          <MoreButton href="projects">All projects</MoreButton>
        </Box>
      </Flex>
    </Section>

    <Section>
      <Title>Blog Posts</Title>
      <Flex>
        <Box width={1 / 2} mr={2}>
          <Card
            image={blog1Image}
            category="Web Development"
            date="24 October 2016"
            title="Blog Post 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                mattis urna vitae ipsum vulputate congue id ac nibh. Curabitur
                ac sem mollis, porta ante ac, porta tortor."
          />
        </Box>
        <Box width={1 / 2}>
          <Card
            image={blog1Image}
            category="Web Development"
            date="24 October 2016"
            title="Blog Post 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            mattis urna vitae ipsum vulputate congue id ac nibh. Curabitur
            ac sem mollis, porta ante ac, porta tortor."
          />
        </Box>
      </Flex>

      <Flex justify="center">
        <Box>
          <MoreButton href="blog">Read all</MoreButton>
        </Box>
      </Flex>
    </Section>
  </Container>
);

export default IndexPage;
