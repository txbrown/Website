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

const Projects = ({ data }) => {
  const { edges: projects } = data.allContentfulProject;

  return (
    <Container>
      <Section>
        <Title>Projects</Title>

        <ProjectList projects={projects} />
      </Section>
    </Container>
  );
};

export default Projects;

export const pageQuery = graphql`
  query ProjectQuery {
    allContentfulProject(sort: { order: DESC, fields: [publishedDate] }) {
      edges {
        node {
          id
          title
          excerpt
          slug
          content {
            content
          }
          bannerImage {
            resolutions(width: 344) {
              ...GatsbyContentfulResolutions
            }
          }
          highlightColor
        }
      }
    }
  }
`;
