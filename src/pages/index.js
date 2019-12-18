import { graphql, StaticQuery } from "gatsby";
import Link from "gatsby-link";
import { Box, Flex } from "grid-styled";
import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Container from "../components/Container";
import JumboTitle from "../components/JumboTitle";
import Layout from "../components/layout";
import ProjectList from "../components/ProjectList";
import Title from "../components/Title";

const SiteTile = styled(JumboTitle)`
  ::after {
    content: " ";
    border: solid #e0e0e0 1px;
    display: block;
    margin: 2em 0;
    width: 35%;
  }
`;

const Intro = styled.p`
  /* color: #bdbdbd; */
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

const PAGE_QUERY = graphql`
  query IndexQuery {
    allContentfulBlogPost(sort: { order: DESC, fields: [publishedDate] }) {
      edges {
        node {
          id
          title
          excerpt
          publishedDate
          slug
          content {
            content
          }
          bannerImage {
            resolutions(width: 344) {
              ...GatsbyContentfulResolutions
            }
          }
        }
      }
    }
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

const IndexPage = ({ data, location, history }) => {
  return (
    <StaticQuery
      query={PAGE_QUERY}
      render={data => {
        const { edges: posts } = data.allContentfulBlogPost;
        const { edges: projects } = data.allContentfulProject;
        return (
          <Layout location={location} history={history}>
            <Container>
              <ProfileSection>
                <SiteTile style={{}}>Ricardo Abreu</SiteTile>
                <Intro>
                  I love understanding problems, solving problems, creating new
                  things and teaching people how to do all the above.
                </Intro>
              </ProfileSection>

              <Section>
                <Title>Projects</Title>

                <ProjectList projects={projects} />
                <Flex justify="center">
                  <Box mt={4}>
                    <MoreButton href="projects">All projects</MoreButton>
                  </Box>
                </Flex>
              </Section>

              <Section>
                <Title>Blog Posts</Title>
                <Flex flexWrap="wrap">
                  {posts.map(({ node: post }) => {
                    return (
                      <Box
                        width={[1, 1 / 2, 1 / 2, 1 / 2]}
                        mb={[2]}
                        pr={[0, 2, 2, 2]}
                        key={post.id}
                      >
                        <Link
                          to={"/blog/" + post.slug}
                          style={{ height: "100%", display: "block" }}
                        >
                          <Card
                            image={post.bannerImage}
                            category="Web Development"
                            date={post.publishedDate}
                            title={post.title}
                            description={post.excerpt}
                          />
                        </Link>
                      </Box>
                    );
                  })}
                </Flex>

                <Flex justify="center">
                  <Box mt={4}>
                    <Link to="blog">
                      <MoreButton href="blog">Read all</MoreButton>
                    </Link>
                  </Box>
                </Flex>
              </Section>
            </Container>
          </Layout>
        );
      }}
    />
  );
};

export default IndexPage;
