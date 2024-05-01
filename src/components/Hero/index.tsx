import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { BeardHat } from "../../helpers/icons";

const Hero: React.FC = () => {
  return (
    <Flex justifyContent="center">
      <Flex maxW="72rem" direction="row" alignItems="center" justifyContent="center">
        <Flex direction="column" width="50%">
          <Heading as="h2" variant="hero">
            Hi, I'm Ryan.
          </Heading>
          <Text variant="hero">
            I'm a product focused fullstack developer, designer and photographer. I love working
            with Ruby, Rails, Typescript, React, Next, and Nodejs.
          </Text>
        </Flex>
        <Flex alignItems="center" justifyContent="center" direction="row" width="25%">
          <Box height={48} width={48}>
            <BeardHat />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Hero;
