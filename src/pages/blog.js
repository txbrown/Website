import Link from "gatsby-link";
import { Box, Flex } from "grid-styled";
import React from "react";
import { Section } from "../components/base/StyledComponents";
import Card from "../components/Card";
import Container from "../components/Container";
import Layout from "../components/layout";
import Title from "../components/Title";

const Blog = ({ data, location }) => {
  const { edges: posts } = data.allContentfulBlogPost;

  return (
    <Layout location={location}>
      <Container>
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
                  <Link to={"blog/" + post.slug}>
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
        </Section>
      </Container>
    </Layout>
  );
};

export default Blog;

export const pageQuery = graphql`
  query BlogQuery {
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
  }
`;
