import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Container from "../components/Container";
import JumboTitle from "../components/JumboTitle";
import Title from "../components/Title";
import { Section, Image } from "../components/base/StyledComponents";
import { Flex, Box } from "grid-styled";
import ProjectList from "../components/ProjectList";
import photoCanvasImage from "../assets/images/project_1.png";
import cardsMenuConcept from "../assets/images/project_2.png";

const Projects = () => (
  <Container>
    <Section>
      <Title>Projects</Title>

      <ProjectList />
    </Section>
  </Container>
);

export default Projects;
