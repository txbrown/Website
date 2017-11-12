import React from "react";
import Helmet from "react-helmet";
import Title from "../components/Title";
import { Flex, Box } from "grid-styled";
import styled from "styled-components";
import Container from "../components/Container";
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

export default function Template({
  data // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data; // data.markdownRemark holds our post data
  console.log(data);
  return (
    <BlogPostContainer>
      <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
      <Flex justify="center">
        <Container>
          <Title>{post.frontmatter.title}</Title>
        </Container>
      </Flex>
      <Flex>
        <ImageBox
          width={1}
          mb={4}
          image={post.frontmatter.img.childImageSharp.responsiveSizes.src}
        />
      </Flex>
      <Flex justify="center">
        <Container>
          <Metadata>
            <Category>{post.frontmatter.category}</Category>
            <CardDate dateTime={post.frontmatter.date}>
              {post.frontmatter.date}
            </CardDate>
          </Metadata>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </Container>
      </Flex>
    </BlogPostContainer>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        category
        img {
          childImageSharp {
            responsiveSizes(maxWidth: 400) {
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
`;
