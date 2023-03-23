import { theme as baseTheme, extendTheme } from "@chakra-ui/react";
import { theme as proTheme } from "@chakra-ui/pro-theme";
import { unique } from "../config";

export const extTheme = {
  colors: { ...baseTheme.colors, brand: baseTheme.colors[unique.colorTheme] },
  styles: {
    global: {
      html: {
        bg: "gray.100",
        height: "auto !important",
      },
      body: {
        height: "auto !important",
      },
    },
  },
};

export const theme = extendTheme(extTheme, proTheme);
