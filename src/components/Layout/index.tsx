import { Box, useBreakpointValue } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "../Header";

const Layout: React.FC = () => {
  const isDesktop = useBreakpointValue({ base: false, xl: true });

  return (
    <Box minH="100vh" display="flex">
      <Box flex="1">
        <Box w="full">
          <Header />
        </Box>
        <Box p="4" marginTop={isDesktop ? "75px" : "48px"}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
