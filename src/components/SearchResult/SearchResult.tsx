import { Box, Typography } from "@mui/material";
import React from "react";
import { PaletteColors } from "../../theme/palette";
import { LocationTime, LocationWeather } from "../../api/types";
import { mapConditionCode } from "../../static/mapConditionCode";

interface SearchResultProps {
  weather: LocationWeather;
  time: LocationTime;
}

const SearchResult: React.FC<SearchResultProps> = ({ weather, time }) => {
  const { cityName, countryName, formatted } = time;
  const { temperature, isDay, weathercode } = weather;

  const condition = mapConditionCode[weathercode][isDay ? "day" : "night"];
  const [day, hour] = formatted.split(" ");

  return (
    <Box p={2}>
      <Typography
        color={PaletteColors.TEXT}
        fontWeight={500}
        variant="h4"
        textAlign="center"
        mb={2}
      >
        {cityName}, {countryName}
      </Typography>
      <Box
        mt={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap={2}
        borderRadius={8}
      >
        <Box>
          <img
            src={condition.image}
            alt="conditions icon"
            width={100}
            height={100}
          />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-end"
          justifyContent="center"
        >
          <Typography
            color={PaletteColors.TEXT}
            fontWeight={500}
            variant="h5"
            mb={2}
          >
            {condition.description}
          </Typography>
          <Typography color={PaletteColors.TEXT} variant="body1" mb={2}>
            {temperature}
          </Typography>
          <Typography color={PaletteColors.TEXT} fontWeight={500} variant="h6">
            {day}
          </Typography>
          <Typography color={PaletteColors.TEXT} fontWeight={500} variant="h6">
            {hour.substring(0, hour.lastIndexOf(":"))}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchResult;
