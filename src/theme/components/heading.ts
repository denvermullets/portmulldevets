import { StyleConfig } from "@chakra-ui/theme-tools";

export const portHeading: StyleConfig = {
  baseStyle: {
    // color: mode("purpleMoment.800", "white"),
  },
  variants: {
    navBar: {
      color: "vazBlue.700",
      fontStyle: "normal",
      fontWeight: "600",
    },
    sectionTitle: {
      color: "vazBlue.700",
      fontStyle: "italic",
      fontWeight: "400",
      fontSize: "1em",
    },
    freelanceTitle: {
      color: "vazBlue.500",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "1.5em",
    },
    hero: {
      color: "vazBlue.700",
      fontStyle: "italic",
      fontWeight: "800",
      fontSize: "48px",
    },
  },
};
