import { Box, Container } from "@mui/material";
import React from "react";
import { PaletteColors } from "../../theme/palette";

interface BackgroundProps {
  children: JSX.Element;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      alignItems="center"
      bgcolor={PaletteColors.PRIMARY}
    >
      <Container>{children}</Container>
    </Box>
  );
};

export default Background;
