// import { theme as base } from "@chakra-ui/react";

export const globalStyles = {
  colors: {
    vazBlue: {
      50: "#084CCF",
    },
    vazBlack: {
      50: "#4B5361",
    },
  },
  styles: {
    global: () => ({
      body: {
        overflowX: "hidden",
        bg: "#F6F5F1",
        letterSpacing: "-0.5px",
      },
      // "html, body": {
      //   fontFamily: `'IBM Plex Sans', ${base.fonts.body}, sans-serif !important`,
      // },
      // "h1, h2, h3, h4, h5, h6": {
      //   fontFamily: `'IBM Plex Sans', ${base.fonts.body}, sans-serif !important`,
      // },
    }),
  },
};
