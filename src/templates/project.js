import { Box, Flex } from "grid-styled";
import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import Container from "../components/Container";
import Layout from "../components/layout";
import Title from "../components/Title";
const ImageBox = styled(Box)`
  background: url(${props => props.image});
  background-size: cover;
  height: 20em;
`;

const BlogPostContainer = styled.div`margin-bottom 6.7em;`;

const Metadata = styled.div`
  margin-bottom: 1.1em;
  display: flex;
  justify-content: space-between;
`;

const Category = styled.span``;

const CardDate = styled.time`
  color: ${props => props.theme.colorLightGrey};
`;

const handleNewComment = () => {};

export default function Template({ data, location }) {
  const { contentfulProject: post } = data;
  const domain = "https://itsricardo.com";

  return (
    <Layout location={location}>
      <BlogPostContainer>
        <Helmet
          title={`Ricardo Abreu - ${post.title}`}
          meta={[
            {
              property: "og:title",
              content: `${post.title}`
            },
            {
              property: "og:description",
              content: `${post.excerpt}`
            },
            {
              property: "og:image",
              content: `${post.bannerImage.resolutions.src}`
            },
            {
              property: "og:url",
              content: `${domain + location.pathname}`
            },
            {
              name: "twitter:title",
              content: `${post.title}`
            },
            {
              name: "twitter:description",
              content: `${post.excerpt}`
            },
            {
              name: "twitter:image",
              content: `${post.bannerImage.resolutions.src}`
            },
            {
              name: "twitter:url",
              content: `${domain + location.pathname}`
            },
            {
              name: "twitter:card",
              content: `${logo}`
            }
          ]}
        />

        <Flex justify="center">
          <Container>
            <Title>{post.title}</Title>
          </Container>
        </Flex>
        <Flex>
          <ImageBox
            width={1}
            mb={4}
            image={post.bannerImage ? post.bannerImage.resolutions.src : null}
          />
        </Flex>
        <Flex justify="center">
          <Container>
            <Metadata>
              <Category>{post.category}</Category>
              <CardDate dateTime={post.date}>{post.date}</CardDate>
            </Metadata>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{
                __html: post.content.childMarkdownRemark.html
              }}
            />
          </Container>
        </Flex>
      </BlogPostContainer>
    </Layout>
  );
}

export const pageQuery = graphql`
  query Project($id: String!) {
    contentfulProject(id: { eq: $id }) {
      title
      excerpt
      slug
      content {
        childMarkdownRemark {
          html
        }
      }
      bannerImage {
        resolutions(width: 344) {
          ...GatsbyContentfulResolutions
        }
      }
    }
  }
`;
