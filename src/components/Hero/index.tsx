import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { BeardHat } from "../../helpers/icons";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <Flex justifyContent="center">
      <Flex maxW="72rem" direction="row" alignItems="center" justifyContent="center">
        <Flex direction="column" width={{ xl: "50%" }} gap={6}>
          <Heading as="h2" variant="hero" fontSize={{ base: "2em", xl: "3em" }}>
            Hi, I'm Ryan.
          </Heading>
          <Text variant="hero" marginTop={-6}>
            I'm a product focused fullstack developer, designer and photographer. I love working
            with Ruby, Rails, Typescript, React, Next, and Nodejs. By day I work at an agency where
            we build apps for some of the world's largest companies. By night I jam on side projects
            and/or freelance projects.
          </Text>
          <Text variant="accent">
            Want to chat a freelance project or something else? Drop me a line!
          </Text>
          <Link to="mailto:ryan.vaznis@gmail.com">
            <Button variant="site" width="8rem">
              Contact Me
            </Button>
          </Link>
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
