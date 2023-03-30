import { theme as proTheme } from "@chakra-ui/pro-theme";
import { theme as baseTheme, extendTheme } from "@chakra-ui/react";
import { unique } from "../config";

export const extTheme = {
  colors: { ...baseTheme.colors, brand: baseTheme.colors[unique.colorTheme] },
  styles: {
    global: {
      "*": {
        boxSizing: "border-box",
      },
      html: {
        bg: "gray.100",
      },
      "html, body, #root": {
        height: "auto !important",
      },
    },
  },
};

export const theme = extendTheme(extTheme, proTheme);
