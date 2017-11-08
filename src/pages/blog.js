import React from "react";
import styled from "styled-components";
import Container from "../components/Container";
import JumboTitle from "../components/JumboTitle";
import Title from "../components/Title";
import blog1Image from "../assets/images/blog-post-1.png";
import { Section, Image } from "../components/base/StyledComponents";
import { Flex, Box } from "grid-styled";
import Card from "../components/Card";

const Blog = () => {
  return (
    <Container>
      <Section>
        <Title>Blog Posts</Title>
        <Flex>
          <Box width={1 / 2} mr={2}>
            <Card
              image={blog1Image}
              category="Web Development"
              date="24 October 2016"
              title="Blog Post 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                mattis urna vitae ipsum vulputate congue id ac nibh. Curabitur
                ac sem mollis, porta ante ac, porta tortor."
            />
          </Box>
          <Box width={1 / 2}>
            <Card
              image={blog1Image}
              category="Web Development"
              date="24 October 2016"
              title="Blog Post 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            mattis urna vitae ipsum vulputate congue id ac nibh. Curabitur
            ac sem mollis, porta ante ac, porta tortor."
            />
          </Box>
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
