import { Box, Divider, Flex, Heading, useBreakpointValue } from "@chakra-ui/react";
import Hero from "../Hero";
import { projectData } from "../../helpers/data";
import ProjectCard from "../ProjectCard";
import { Fragment } from "react/jsx-runtime";
import { useEffect } from "react";
import { logVisit } from "../../models/user";

const LandingView: React.FC = () => {
  const isDesktop = useBreakpointValue({ base: false, xl: true });

  useEffect(() => {
    const logInitialVisit = async () => {
      await logVisit("page_visit");
    };

    logInitialVisit();
  }, []);

  return (
    <Box marginBottom={16}>
      <Box marginY={{ base: 16, xl: 32 }}>
        <Hero />
      </Box>
      <Flex
        direction="row"
        alignItems="center"
        justifyContent={{ base: "end", xl: "start" }}
        marginTop={8}
        padding={{ xl: 8 }}
        marginBottom={{ sm: 8 }}
      >
        {!isDesktop && (
          <Divider orientation="horizontal" flex="1" borderColor="vazBlue.700" maxWidth="16rem" />
        )}
        <Heading
          variant="sectionTitle"
          as="h6"
          marginRight={{ base: 0, xl: 4 }}
          marginLeft={{ base: 2, xl: 0 }}
        >
          Projects
        </Heading>
        {isDesktop && (
          <Divider orientation="horizontal" flex="1" borderColor="vazBlue.700" maxWidth="16rem" />
        )}
      </Flex>
      <Flex direction="column" gap={8} paddingX={{ xl: 16 }}>
        {projectData.map((project, index) => (
          <Fragment key={index}>
            <ProjectCard projectData={project} imageOnRight={index % 2 !== 0} />
            {index + 1 !== projectData.length && <Divider borderColor="vazBlue.700" />}
          </Fragment>
        ))}
      </Flex>
    </Box>
  );
};

export default LandingView;
