import { AspectRatio, Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

type ProjectImageProps = {
  image?: string | null;
};

const ProjectImage: React.FC<ProjectImageProps> = ({ image }) => {
  return (
    <Box
      bgColor="vazBeige.50"
      borderColor="vazBlue.300"
      borderRadius={4}
      padding={2}
      borderWidth={1}
      width={{ base: "auto", xl: "50%" }}
      height="100%"
    >
      {image ? (
        <>
          <Link to={image} target="_blank" rel="noopener noreferrer">
            <Image src={image} width="auto" />
          </Link>
        </>
      ) : (
        <AspectRatio ratio={16 / 9}>
          <Box bgColor="vazBlue.500" />
        </AspectRatio>
      )}
    </Box>
  );
};

export default ProjectImage;
