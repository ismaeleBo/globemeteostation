import { TypographyOptions } from "@mui/material/styles/createTypography";

export const typography: TypographyOptions = {
  h2: {
    fontSize: "2.4rem",
    "@media (min-width:600px)": {
      fontSize: "4.8rem",
    },
  },
  h4: {
    fontSize: "1.4rem",
    "@media (min-width:600px)": {
      fontSize: "1.8rem",
    },
  },
};
