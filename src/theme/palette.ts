import { PaletteOptions } from "@mui/material";
import { blue, grey, indigo, pink } from "@mui/material/colors";

export const appPalette: PaletteOptions = {
  primary: {
    main: blue[600],
    dark: indigo[600],
  },
  secondary: {
    main: pink[500],
    dark: pink[800],
  },
  text: {
    primary: grey[900],
    secondary: grey[300],
    disabled: grey["A400"],
  },
};

export enum PaletteColors {
  TEXT = "text.main",
  TEXT_2 = "text.secondary",
  TEXT_DISABLED = "text.disabled",
  PRIMARY = "primary.main",
  PRIMARY_DARK = "primary.dark",
  SECONDARY = "secondary.main",
  SECONDARY_DARK = "secondary.dark",
}
