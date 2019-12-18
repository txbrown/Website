import Link from "gatsby-link";
import { Box, Flex } from "grid-styled";
import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectList = props => {
  const { projects } = props;
  if (projects) {
    return (
      <Flex flexWrap="wrap">
        {projects.map(({ node: project }) => (
          <Box
            width={[1, 1 / 2, 1 / 2, 1 / 2]}
            mb={[2, 2, 2, 2]}
            pr={[0, 2, 2, 2]}
            key={project.id}
          >
            <Link to={"projects/" + project.slug}>
              <ProjectCard
                image={project.bannerImage.resolutions}
                title={project.title}
                highlightColor={project.highlightColor}
              />
            </Link>
          </Box>
        ))}
      </Flex>
    );
  } else {
    return <div>No projects found.</div>;
  }
};

export default ProjectList;
