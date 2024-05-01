import { Box, Flex, HStack, Heading, Text } from "@chakra-ui/react";
import { BeardHat } from "../../helpers/icons";

const Header = () => {
  return (
    <Flex
      as="header"
      align="center"
      justifyContent="space-between"
      p={4}
      borderBottomWidth="1px"
      borderColor="vazBlue.300"
      width="100%"
      position="fixed"
      top="0"
      right="0"
      zIndex="banner"
      bgColor="vazBeige.50"
    >
      <HStack>
        <Box height={10} width={10}>
          <BeardHat />
        </Box>
        <Heading variant="navBar" as="h3" size="lg">
          Ryan Vaznis
        </Heading>
      </HStack>
      <HStack spacing={4} marginRight={2}>
        <Text>About</Text>
        <Text>Projects</Text>
        <Text>Resume</Text>
        <Text>Contact</Text>
      </HStack>
    </Flex>
  );
};

export default Header;
