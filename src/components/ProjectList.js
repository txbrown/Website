import React from "react";
import { Flex, Box } from "grid-styled";
import ProjectCard from "./ProjectCard";
import photoCanvasImage from "../assets/images/project_1.png";
import cardsMenuConcept from "../assets/images/project_2.png";
import Link from "gatsby-link";

const ProjectList = () => {
  return (
    <Flex wrap>
      <Box width={[1, 1 / 2, 1 / 2, 1 / 2]} mb={[2, 2, 2, 2]} pr={[2]}>
        <Link>
          <ProjectCard
            image={photoCanvasImage}
            title="PhotoCanvas - UWP"
            highlightcColor="#ffeb5c"
          />
        </Link>
      </Box>
      <Box width={[1, 1 / 2, 1 / 2, 1 / 2]} mb={[2, 2, 2, 2]} pr={[2]}>
        <Link>
          <ProjectCard
            image={cardsMenuConcept}
            title="Cards Menu Concept"
            highlightcColor="#33D399"
          />
        </Link>
      </Box>
      <Box width={[1, 1 / 2, 1 / 2, 1 / 2]} mb={[2, 2, 2, 2]} pr={[2]}>
        <Link>
          <ProjectCard
            image={cardsMenuConcept}
            title="Cards Menu Concept"
            highlightcColor="#33D399"
          />
        </Link>
      </Box>
      <Box width={[1, 1 / 2, 1 / 2, 1 / 2]} mb={[2, 2, 2, 2]} pr={[2]}>
        <Link>
          <ProjectCard
            image={cardsMenuConcept}
            title="Cards Menu Concept"
            highlightcColor="#33D399"
          />
        </Link>
      </Box>
    </Flex>
  );
};

export default ProjectList;
