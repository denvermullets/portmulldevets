import { AspectRatio, Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
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
          height="100%"
        >
          {projectData.image ? (
            <>
              <Link to={projectData.image} target="_blank" rel="noopener noreferrer">
                <Image src={projectData.image} width="auto" />
              </Link>
            </>
          ) : (
            <AspectRatio ratio={16 / 9}>
              <Box bgColor="vazBlue.500" />
            </AspectRatio>
          )}
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
        <Flex direction="row" gap={2} marginTop={2} width="100%" wrap="wrap">
          {projectData.tags.map((tag, index) => (
            <TagPill key={`${tag}-${projectData.title}-${index}`} status={tag} />
          ))}
        </Flex>

        {projectData.links.length > 0 && (
          <Flex direction="row" align="end" gap={4} marginTop={8}>
            {projectData.links.map((link, index) => (
              <Link
                to={link.url}
                target="_blank"
                rel="noopener noreferrer"
                key={`${projectData.title}-link-${index}`}
              >
                <Button variant="site">{link.title}</Button>
              </Link>
            ))}
          </Flex>
        )}
      </Flex>

      {imageOnRight && (
        <Box
          width="50%"
          bgColor="vazBeige.50"
          borderColor="vazBlue.300"
          borderRadius={4}
          padding={2}
          borderWidth={1}
          height="100%"
        >
          {projectData.image ? (
            <>
              <Link to={projectData.image} target="_blank" rel="noopener noreferrer">
                <Image src={projectData.image} width="auto" />
              </Link>
            </>
          ) : (
            <AspectRatio ratio={16 / 9}>
              <Box bgColor="vazBlue.500" />
            </AspectRatio>
          )}
        </Box>
      )}
    </Flex>
  );
};

export default ProjectCard;
