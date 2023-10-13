import { CreateStitches, createStitches } from "@stitches/react";

export const {
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  css,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      rocketseat: "#8257e6",
      white: "#FFF",
      gray900: "#121214",
      gray800: "#202024",
      gray300: "#c4c4cc",
      gray100: "#elele6",
      green500: "#00875f",
      green300: "#00b37e",
    },
    fontSizes: {
      md: "1.125rem", //18px
      lg: "1.25rem", //20px
      xl: "1.5rem", //24px
      "2xl": "2rem", //32px
    },
  },
});