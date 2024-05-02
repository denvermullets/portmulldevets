import { Flex, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import { ProjectData } from "../../helpers/data";
import ProjectImage from "./ProjectImage";
import ProjectCardMobile from "./ProjectCardMobile";
import ProjectTags from "./ProjectTags";
import ProjectLinks from "./ProjectLinks";

type ProjectCardProps = {
  imageOnRight: boolean;
  projectData: ProjectData;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ imageOnRight, projectData }) => {
  const isDesktop = useBreakpointValue({ base: false, xl: true });

  return isDesktop ? (
    <Flex direction="row" gap={8}>
      {!imageOnRight && <ProjectImage image={projectData.image} />}

      <Flex direction="column" width="50%" gap={4} justifyContent="center">
        <Heading variant="project" fontSize={{ base: "2em", xl: "3em" }}>
          {projectData.title}
        </Heading>

        {projectData.freelance && (
          <Heading as="h4" variant="freelanceTitle" marginTop={-4}>
            Freelance Contract
          </Heading>
        )}

        <Text variant="hero">{projectData.description}</Text>
        <ProjectTags tags={projectData.tags} title={projectData.title} />

        {projectData.links.length > 0 && (
          <ProjectLinks links={projectData.links} title={projectData.title} />
        )}
      </Flex>

      {imageOnRight && <ProjectImage image={projectData.image} />}
    </Flex>
  ) : (
    <ProjectCardMobile projectData={projectData} />
  );
};

export default ProjectCard;
