import { Box, Divider, Flex, Heading } from "@chakra-ui/react";
import Hero from "../Hero";
import { projectData } from "../../helpers/data";
import ProjectCard from "../ProjectCard";

const LandingView: React.FC = () => {
  return (
    <Box marginTop={8}>
      <Hero />
      <Flex direction="row" alignItems="center" marginTop={8} padding={8}>
        <Heading variant="sectionTitle" as="h6" marginRight={4}>
          Projects
        </Heading>
        <Divider orientation="horizontal" flex="1" borderColor="vazBlue.700" maxWidth="16rem" />
      </Flex>
      <Flex direction="column" gap={8} paddingX={16}>
        {projectData.map((project, index) => (
          <>
            <ProjectCard key={index} projectData={project} imageOnRight={index % 2 !== 0} />
            <Divider borderColor="vazBlue.700" />
          </>
        ))}
      </Flex>
    </Box>
  );
};

export default LandingView;
