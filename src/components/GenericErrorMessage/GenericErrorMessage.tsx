import { Typography } from "@mui/material";
import React from "react";
import { PaletteColors } from "../../theme/palette";

const GenericErrorMessage = () => {
  return (
    <Typography mt={2} color={PaletteColors.WARNING} variant="body1">
      An error occurred, please try again
    </Typography>
  );
};

export default GenericErrorMessage;
