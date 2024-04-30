import { Box, useBreakpointValue } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import MobileHeader from "../Header/MobileHeader";

const Layout: React.FC = () => {
  const isDesktop = useBreakpointValue({ base: false, xl: true });

  return (
    <Box minH="100vh" display="flex">
      <Box flex="1">
        <Box w="full">{isDesktop ? <Header /> : <MobileHeader />}</Box>
        <Box p="4" marginTop={isDesktop ? "75px" : 0}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
