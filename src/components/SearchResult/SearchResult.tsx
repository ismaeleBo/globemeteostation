import { Box, Typography } from "@mui/material";
import React from "react";
import { PaletteColors } from "../../theme/palette";

interface SearchResultProps {
  cityName: string;
  temperature: string;
  date: string;
}

const SearchResult: React.FC<SearchResultProps> = ({
  cityName,
  temperature,
  date,
}) => {
  return (
    <Box p={2}>
      <Typography
        color={PaletteColors.TEXT}
        fontWeight={500}
        variant="h4"
        textAlign="center"
        mb={2}
      >
        {cityName}
      </Typography>
      <Box mt={2}>
        <Typography
          color={PaletteColors.TEXT}
          fontWeight={500}
          variant="h5"
          mb={2}
        >
          {temperature}
        </Typography>
        <Typography
          color={PaletteColors.TEXT}
          fontWeight={500}
          variant="h5"
          mb={2}
        >
          {date}
        </Typography>
      </Box>
    </Box>
  );
};

export default SearchResult;
