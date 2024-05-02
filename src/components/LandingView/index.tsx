import { Box, Divider, Flex, Heading } from "@chakra-ui/react";
import Hero from "../Hero";
import { projectData } from "../../helpers/data";
import ProjectCard from "../ProjectCard";
import { Fragment } from "react/jsx-runtime";

const LandingView: React.FC = () => {
  return (
    <Box marginBottom={16}>
      <Box marginTop={32} marginBottom={32}>
        <Hero />
      </Box>
      <Flex direction="row" alignItems="center" marginTop={8} padding={8}>
        <Heading variant="sectionTitle" as="h6" marginRight={4}>
          Projects
        </Heading>
        <Divider orientation="horizontal" flex="1" borderColor="vazBlue.700" maxWidth="16rem" />
      </Flex>
      <Flex direction="column" gap={8} paddingX={16}>
        {projectData.map((project, index) => (
          <Fragment key={index}>
            <ProjectCard projectData={project} imageOnRight={index % 2 !== 0} />
            {index + 1 !== projectData.length && <Divider borderColor="vazBlue.700" />}
          </Fragment>
        ))}
      </Flex>
    </Box>
  );
};

export default LandingView;
