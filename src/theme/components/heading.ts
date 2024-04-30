import { StyleConfig } from "@chakra-ui/theme-tools";

export const portHeading: StyleConfig = {
  baseStyle: {
    // color: mode("purpleMoment.800", "white"),
  },
  variants: {
    navBar: {
      color: "vazBlue.50",
      fontStyle: "normal",
      fontWeight: "600",
    },
    hero: {
      color: "vazBlue.50",
      fontStyle: "italic",
      fontWeight: "800",
      fontSize: "48px",
    },
  },
};
