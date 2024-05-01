import { Circle, HStack, Text } from "@chakra-ui/react";

type TagPillProps = {
  status: string;
};

const TagPill: React.FC<TagPillProps> = ({ status }) => {
  const determineColor = () => {
    switch (status.toLowerCase()) {
      case "ruby on rails":
        return "vazRed.50";
      case "redis":
        return "vazRed.50";
      case "solidqueue":
        return "vazRed.50";
      case "node.js":
        return "vazRed.50";
      case "react":
        return "vazBlue.700";
      case "typescript":
        return "vazBlue.700";
      default:
        return "vazGreen.50";
    }
  };

  return (
    <HStack
      display="inline-flex"
      borderWidth={1}
      borderColor={determineColor()}
      width="auto"
      paddingX={2}
      paddingY={1}
      rounded={8}
    >
      <Circle size={2} bg={determineColor()} />
      <Text fontSize="12px">{status}</Text>
    </HStack>
  );
};

export default TagPill;