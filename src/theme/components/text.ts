import { mode, StyleConfig, StyleFunctionProps } from "@chakra-ui/theme-tools";

// don't forget to update colors to ones you have defined in your color theme
export const momentText: StyleConfig = {
  baseStyle: (props: StyleFunctionProps) => ({
    color: mode("purpleMoment.800", "darkMode.200")(props),
  }),

  variants: {
    hero: () => ({
      color: "vazBlack.50",
      fontWeight: "400",
    }),
    navHeader: (props: StyleFunctionProps) => ({
      color: mode("purpleMoment.800", "darkMode.200")(props),
      fontWeight: "900",
      fontSize: "34px",
      _focus: { boxShadow: "none" },
    }),
  },
};
