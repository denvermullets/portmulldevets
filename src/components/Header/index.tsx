import { Box, Button, Flex, HStack, Heading } from "@chakra-ui/react";
import { BeardHat } from "../../helpers/icons";
import { Link } from "react-router-dom";

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
        <Link to="https://github.com/denvermullets" target="_blank" rel="noopener noreferrer">
          <Button variant="href">Github</Button>
        </Link>
        <Link
          to="https://www.linkedin.com/in/ryanvaznis/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="href">Linkedin</Button>
        </Link>
        <Link to="mailto:ryan.vaznis@gmail.com">
          <Button variant="href">Contact Me</Button>
        </Link>
      </HStack>
    </Flex>
  );
};

export default Header;
