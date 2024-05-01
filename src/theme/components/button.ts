import { StyleConfig } from "@chakra-ui/theme-tools";

export const vazButton: StyleConfig = {
  baseStyle: () => ({
    rounded: "4",
  }),
  variants: {
    site: () => ({
      border: "1px",
      fontSize: "sm",
      fontWeight: "500",
      width: "100%",
      color: "vazBlue.700",
      backgroundColor: "vazBeige.50",
      _hover: {
        border: "1px",
        color: "vazBlue.700",
        backgroundColor: "vazBeige.50",
      },
    }),
  },
};
