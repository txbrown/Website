import { theme as chackraTheme } from '@chakra-ui/core';

// Let's say you want to add custom colors
const theme = {
  ...chackraTheme,
  fonts: {
    heading:
      'SF UI Text,-apple-system,BlinkMacSystemFont,"Helvetica Neue","Segoe UI","Oxygen","Ubuntu","Cantarell","Open Sans",sans-serif',
    body:
      'SF UI Text,-apple-system,BlinkMacSystemFont,"Helvetica Neue","Segoe UI","Oxygen","Ubuntu","Cantarell","Open Sans",sans-serif',
    mono: 'Menlo, monospace'
  },
  colors: {
    ...chackraTheme.colors,
    brand: {
      900: '#33d399',
      800: '#153e75',
      700: '#2a69ac'
    }
  }
};

export default theme;
