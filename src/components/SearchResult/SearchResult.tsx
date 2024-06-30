import { Box, Typography } from "@mui/material";
import React from "react";
import { PaletteColors } from "../../theme/palette";
import { LocationTime, LocationWeather } from "../../api/types";
import { mapConditionCode } from "../../static/mapConditionCode";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

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
            textAlign="right"
          >
            {condition.description}
          </Typography>
          <Box display="flex" alignItems="center" mb={2} gap={0.5}>
            <Typography
              color={PaletteColors.TEXT}
              variant="h4"
              fontWeight="bold"
              textAlign="right"
            >
              {temperature}°C
            </Typography>
            <DeviceThermostatIcon />
          </Box>

          <Box display="flex" alignItems="center" mb={2} gap={0.5}>
            <Typography
              color={PaletteColors.TEXT}
              fontWeight={500}
              variant="h6"
              textAlign="right"
            >
              {day}
            </Typography>
            <CalendarMonthIcon />
          </Box>
          {hour && (
            <Box display="flex" alignItems="center" mb={2} gap={0.5}>
              <Typography
                color={PaletteColors.TEXT}
                fontWeight={500}
                variant="h6"
                textAlign="right"
              >
                {hour.substring(0, hour.lastIndexOf(":"))}
              </Typography>
              <AccessTimeIcon />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default SearchResult;
