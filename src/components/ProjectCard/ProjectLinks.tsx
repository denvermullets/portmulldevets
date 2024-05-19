import { Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ProjectDataLink } from "../../helpers/data";
import { logVisit } from "../../models/user";

type ProjectLinksProps = {
  links: ProjectDataLink[];
  title: string;
};

const ProjectLinks: React.FC<ProjectLinksProps> = ({ links, title }) => {
  const logInitialVisit = async (desc: string) => {
    await logVisit(desc + "_click");
  };

  return (
    <Flex
      direction="row"
      align="end"
      gap={{ base: 2, xl: 4 }}
      marginTop={{ base: 0, xl: 8 }}
      marginBottom={{ sm: 2 }}
    >
      {links.map((link, index) => (
        <Link
          to={link.url}
          target="_blank"
          rel="noopener noreferrer"
          key={`${title}-link-${index}`}
          onClick={() => logInitialVisit(link.url)}
        >
          <Button variant="site">{link.title}</Button>
        </Link>
      ))}
    </Flex>
  );
};

export default ProjectLinks;
