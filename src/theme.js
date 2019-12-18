import { theme as chackraTheme } from "@chakra-ui/core";

// Let's say you want to add custom colors
const theme = {
  ...chackraTheme,
  fonts: {
    heading:
      'SF UI Text,-apple-system,BlinkMacSystemFont,"Helvetica Neue","Segoe UI","Oxygen","Ubuntu","Cantarell","Open Sans",sans-serif',
    body:
      'SF UI Text,-apple-system,BlinkMacSystemFont,"Helvetica Neue","Segoe UI","Oxygen","Ubuntu","Cantarell","Open Sans",sans-serif',
    mono: "Menlo, monospace"
  },
  colors: {
    ...chackraTheme.colors,
    brand: {
      900: "#33d399",
      800: "#153e75",
      700: "#2a69ac"
    }
  }
};

export default theme;

// const theme = {
//     colorPrimary: "#33d399",
//     colorPaleGrey: "#f2f2f2",
//     colorLightGrey: "#bdbdbd",
//     colorDarkGrey: "#4f4f4f",
//     fontSmall: "14px",
//     fontNormal: "18px",
//     fontMedium: "32px",
//     fontLarge: "36px",
//     defaultOpacity: "0.8",
//     defaultTransitionTime: "0.6s"
//   };

// export default {
//   breakpoints: ["30em", "48em", "62em", "80em"],
//   fonts: {
//     heading: '"Avenir Next", sans-serif',
//     body: "system-ui, sans-serif",
//     mono: "Menlo, monospace"
//   },
//   fontSizes: {
//     xs: "0.75rem",
//     sm: "0.875rem",
//     md: "1rem",
//     lg: "1.125rem",
//     xl: "1.25rem",
//     "2xl": "1.5rem",
//     "3xl": "1.875rem",
//     "4xl": "2.25rem",
//     "5xl": "3rem",
//     "6xl": "4rem"
//   }
// };
