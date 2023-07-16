import type { Preview } from "@storybook/react";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { theme } from "../constants/Theme";

import { GlobalStyles } from "../components/GlobalStyles";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: theme,
      },
      defaultTheme: "light",
      Provider: ThemeProvider,
      GlobalStyles,
    }),
  ],
};

export default preview;
