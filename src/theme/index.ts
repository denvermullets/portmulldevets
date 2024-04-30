import { extendTheme, theme as base } from "@chakra-ui/react";
import { globalStyles } from "./styles";
import { momentText } from "./components/text";
import { portHeading } from "./components/heading";

const customTheme = extendTheme({
  components: {
    Text: { ...momentText },
    Heading: { ...portHeading },
  },
  ...globalStyles,
});

customTheme.fonts = {
  heading: `'IBM Plex Sans', ${base.fonts.body}, sans-serif !important`,
  body: `'IBM Plex Sans', ${base.fonts.heading}, sans-serif !important`,
};

export default customTheme;
