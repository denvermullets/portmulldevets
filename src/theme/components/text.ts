import { StyleConfig } from "@chakra-ui/theme-tools";

export const vazText: StyleConfig = {
  variants: {
    hero: () => ({
      color: "vazBlack.50",
      fontWeight: "400",
    }),
    accent: () => ({
      color: "vazBlue.700",
      fontWeight: "500",
      fontStyle: "italic",
    }),
    tags: () => ({
      color: "vazBlue.700",
      fontWeight: "400",
      fontStyle: "italic",
    }),
  },
};
