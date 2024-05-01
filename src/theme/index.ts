import { extendTheme, theme as base } from "@chakra-ui/react";
import { globalStyles } from "./styles";
import { momentText } from "./components/text";
import { portHeading } from "./components/heading";
import { vazButton } from "./components/button";

const customTheme = extendTheme({
  components: {
    Button: { ...vazButton },
    Heading: { ...portHeading },
    Text: { ...momentText },
  },
  ...globalStyles,
});

customTheme.fonts = {
  heading: `'IBM Plex Sans', ${base.fonts.body}, sans-serif !important`,
  body: `'IBM Plex Sans', ${base.fonts.heading}, sans-serif !important`,
};

export default customTheme;
