import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Container from "../components/Container";
import JumboTitle from "../components/JumboTitle";
import Title from "../components/Title";
import { Section, Image } from "../components/base/StyledComponents";
import { Flex, Box } from "grid-styled";
import ProjectCard from "../components/ProjectCard";
import photoCanvasImage from "../assets/images/project_1.png";
import cardsMenuConcept from "../assets/images/project_2.png";

const ProjectList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 2em;
`;

const Item = styled.li`
  width: 50%;
`;

const Projects = () => (
  <Container>
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
      {/* <Flex justify="center">
      <Box>
        <MoreButton href="projects">All projects</MoreButton>
      </Box>
    </Flex> */}
    </Section>
  </Container>
);

export default Projects;
