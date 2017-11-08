import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Container from "../components/Container";
import JumboTitle from "../components/JumboTitle";
import Title from "../components/Title";
import photoCanvasImage from "../assets/images/project-1.png";
import cardsMenuConcept from "../assets/images/project-2.png";
import { Section, Image } from "../components/base/StyledComponents";
import { Flex, Box } from "grid-styled";

const ProjectList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 2em;
`;

const Item = styled.li`
  width: 50%;
`;

const ProjectCard = styled.div`
  width: 100%;
  position: relative;
  display: block;
`;

const ProjectCardCover = styled.div`
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
`;

const Projects = () => (
  <Container>
    <Section>
      <Title>Projects</Title>

      <ProjectList>
        <Item>
          <ProjectCard>
            <Image src={photoCanvasImage} alt="" />
            <ProjectCardCover background="#ffeb5c">
              <h3 className="project-card-title">PhotoCanvas - UWP</h3>
            </ProjectCardCover>
          </ProjectCard>
        </Item>
        <Item>
          <ProjectCard>
            <Image src={cardsMenuConcept} alt="" />
            <ProjectCardCover background="#33D399">
              <h3 className="project-card-title">Cards Menu Concept</h3>
            </ProjectCardCover>
          </ProjectCard>
        </Item>
        <Item>
          <ProjectCard>
            <Image src="/public/images/project-2.png" alt="" />
            <ProjectCardCover background="#33D399">
              <h3 className="project-card-title">Cards Menu Concept</h3>
            </ProjectCardCover>
          </ProjectCard>
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
