import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { ProjectData } from "../../helpers/data";
import TagPill from "../TagPill";
import { Link } from "react-router-dom";

type ProjectCardProps = {
  imageOnRight: boolean;
  projectData: ProjectData;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ imageOnRight, projectData }) => {
  return (
    <Flex direction="row" gap={8}>
      {!imageOnRight && (
        <Box
          width="50%"
          bgColor="vazBeige.50"
          borderColor="vazBlue.300"
          borderRadius={4}
          padding={2}
          borderWidth={1}
          height="auto"
        >
          <Image src={projectData.image} width="auto" />
        </Box>
      )}

      <Flex direction="column" width="50%" gap={4} justifyContent="center">
        <Heading variant="hero">{projectData.title}</Heading>
        {projectData.freelance && (
          <Heading as="h4" variant="freelanceTitle" marginTop={-4}>
            Freelance Contract
          </Heading>
        )}
        <Text variant="hero">{projectData.description}</Text>
        <Flex direction="row" gap={2} marginTop={2}>
          {projectData.tags.map((tag) => (
            <TagPill status={tag} />
          ))}
        </Flex>
        <Flex direction="row" align="end" gap={4} marginTop={8}>
          {projectData.links.map((link) => (
            <Link to={link.url}>
              <Button variant="site">{link.title}</Button>
            </Link>
          ))}
        </Flex>
      </Flex>

      {imageOnRight && (
        <Box
          width="50%"
          borderColor="vazBlue.300"
          borderRadius={4}
          padding={2}
          borderWidth={1}
          bgColor="vazBeige.50"
        >
          <Image src={projectData.image} width="auto" />
        </Box>
      )}
    </Flex>
  );
};

export default ProjectCard;
