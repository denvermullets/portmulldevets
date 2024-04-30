import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const Hero: React.FC = () => {
  return (
    <Box padding={24}>
      <Flex direction="row">
        <Flex direction="column">
          <Heading as="h2" variant="hero">
            Hi, I'm Ryan.
          </Heading>
          <Text variant="hero">
            I'm a product focused fullstack developer, designer and photographer. I love working
            with Ruby, Rails, Typescript, React, Next, and Nodejs.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Hero;
