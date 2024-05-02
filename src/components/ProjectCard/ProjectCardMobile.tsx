import { Flex, Heading, Text } from "@chakra-ui/react";
import { ProjectData } from "../../helpers/data";
import ProjectImage from "./ProjectImage";
import ProjectTags from "./ProjectTags";
import ProjectLinks from "./ProjectLinks";

type ProjectCardMobileProps = {
  projectData: ProjectData;
};

const ProjectCardMobile: React.FC<ProjectCardMobileProps> = ({ projectData }) => {
  return (
    <Flex direction="row" gap={8}>
      <Flex direction="column" width="100%" gap={4} justifyContent="center">
        <Flex direction="column" marginBottom={-2}>
          <Heading variant="project" fontSize={{ base: "2em" }}>
            {projectData.title}
          </Heading>
          {projectData.freelance && (
            <Heading as="h4" variant="freelanceTitle" fontSize={"1em"} marginTop={-2}>
              Freelance Contract
            </Heading>
          )}
        </Flex>
        <ProjectImage image={projectData.image} />
        <Text variant="hero">{projectData.description}</Text>
        <ProjectTags tags={projectData.tags} title={projectData.title} />

        {projectData.links.length > 0 && (
          <ProjectLinks links={projectData.links} title={projectData.title} />
        )}
      </Flex>
    </Flex>
  );
};

export default ProjectCardMobile;
