import { PaletteOptions } from "@mui/material";
import { blue, grey, indigo, red, teal } from "@mui/material/colors";

export const appPalette: PaletteOptions = {
  primary: {
    main: blue[600],
    dark: indigo[600],
  },
  secondary: {
    main: teal[400],
    dark: teal[600],
  },
  text: {
    primary: grey[900],
    secondary: grey[300],
    disabled: grey["A400"],
  },
  warning: {
    main: red[700],
  },
};

export enum PaletteColors {
  TEXT = "text.primary",
  TEXT_2 = "text.secondary",
  TEXT_DISABLED = "text.disabled",
  PRIMARY = "primary.main",
  PRIMARY_DARK = "primary.dark",
  SECONDARY = "secondary.main",
  SECONDARY_DARK = "secondary.dark",
  WARNING = "warning.main",
}
