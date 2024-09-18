import { Outfit } from "next/font/google";
import { createTheme } from "@mantine/core";

export const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export const theme = createTheme({
  primaryColor: "blue", // NOTE must sync with hardcoded color in `PromptVariable.module.css`
  colors: {
    "bright-pink": [
      "#F0BBDD",
      "#ED9BCF",
      "#EC7CC3",
      "#ED5DB8",
      "#F13EAF",
      "#F71FA7",
      "#FF00A1",
      "#E00890",
      "#C50E82",
      "#AD1374",
    ],
  },
  cursorType: "pointer",
});

export const ICON_STROKE = 1.5;
