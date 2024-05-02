import { Flex, Text } from "@chakra-ui/react";

type ProjectTagsProps = {
  tags: string[];
  title: string;
};

const ProjectTags: React.FC<ProjectTagsProps> = ({ tags, title }) => {
  return (
    <Flex direction="row" gap={2} width="100%" wrap="wrap">
      <Text variant="hero">Stack used:</Text>
      {tags.map((tag, index) => (
        <Text key={`${tag}-${title}-${index}`} variant="tags">
          {tag}
        </Text>
      ))}
    </Flex>
  );
};

export default ProjectTags;
