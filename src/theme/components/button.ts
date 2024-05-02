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
        color: "vazBeige.50",
        backgroundColor: "vazBlue.700",
      },
    }),
    href: () => ({
      border: "0px",
      fontSize: "sm",
      fontWeight: "500",
      width: "100%",
      color: "vazBlue.700",
      backgroundColor: "vazBeige.50",
      _hover: {
        border: "0px",
        color: "vazBlue.700",
        backgroundColor: "vazBeige.50",
      },
    }),
  },
};
