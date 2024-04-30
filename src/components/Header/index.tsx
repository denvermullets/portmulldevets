import { Box, Flex, HStack, Heading, Text } from "@chakra-ui/react";
import { Beard } from "../../helpers/icons";

const Header = () => {
  return (
    <Flex
      as="header"
      align="center"
      justifyContent="space-between"
      p={4}
      borderBottomWidth="2px"
      borderColor={"gray.200"}
      width="100%"
      position="fixed"
      top="0"
      right="0"
      zIndex="banner"
    >
      <HStack marginLeft={-2}>
        <Box height={10} width={10}>
          <Beard />
        </Box>
        <Heading variant="navBar" as="h3" size="lg">
          Ryan Vaznis
        </Heading>
      </HStack>
      <HStack spacing={4}>
        <Text>About</Text>
        <Text>Projects</Text>
        <Text>Resume</Text>
        <Text>Contact</Text>
      </HStack>
    </Flex>
  );
};

export default Header;
