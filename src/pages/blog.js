import React from "react";
import styled from "styled-components";
import Container from "../components/Container";
import JumboTitle from "../components/JumboTitle";
import Title from "../components/Title";
import blog1Image from "../assets/images/blog_post_1.png";
import { Section, Image } from "../components/base/StyledComponents";
import { Flex, Box } from "grid-styled";
import Card from "../components/Card";
import Link from "gatsby-link";

const Blog = ({ data }) => {
  const { edges: posts } = data.allContentfulBlogPost;
  console.log(data);
  return (
    <Container>
      <Section>
        <Title>Blog Posts</Title>
        <Flex wrap>
          {posts.map(({ node: post }) => {
            return (
              <Box
                width={[1, 1 / 2, 1 / 2, 1 / 2]}
                mb={[2, 0, 0, 0]}
                pr={[0, 2, 2, 2]}
                key={post.id}
              >
                <Link to={"blog/" + post.slug}>
                  <Card
                    image={
                      post.bannerImage ? post.bannerImage.resolutions.src : null
                    }
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

        {/* <Flex justify="center">
          <Box>
            <MoreButton href="blog">Read all</MoreButton>
          </Box>
        </Flex> */}
      </Section>
    </Container>
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
