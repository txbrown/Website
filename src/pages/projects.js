import React from "react";
import { Section } from "../components/base/StyledComponents";
import Container from "../components/Container";
import Layout from "../components/layout";
import ProjectList from "../components/ProjectList";
import Title from "../components/Title";

const Projects = ({ data, location }) => {
  const { edges: projects } = data.allContentfulProject;

  return (
    <Layout location={location}>
      <Container>
        <Section>
          <Title>Projects</Title>

          <ProjectList projects={projects} />
        </Section>
      </Container>
    </Layout>
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
