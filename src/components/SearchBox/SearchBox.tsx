import { Box, Card, CircularProgress, Typography } from "@mui/material";
import { PaletteColors } from "../../theme/palette";
import SearchInput from "../SearchInput";
import { Location } from "../../api/types";
import SearchResult from "../SearchResult";
import {
  useLazyGetLocationTimeQuery,
  useLazyGetLocationWeatherQuery,
} from "../../api";
import { mapConditionCode } from "../../static/mapConditionCode";
import { useEffect, useMemo } from "react";
import { Conditions } from "../../types";
import GenericErrorMessage from "../GenericErrorMessage";

interface SearchBoxProps {
  setConditions: (conditions: Conditions) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ setConditions }) => {
  const [
    getLocationWeatherQuery,
    {
      data: locationWeather,
      isFetching: isWeatherFetching,
      isError: isWeatherError,
    },
  ] = useLazyGetLocationWeatherQuery();
  const [
    getLocationTimeQuery,
    { data: locationTime, isFetching: isTimeFetching, isError: isTimeError },
  ] = useLazyGetLocationTimeQuery();

  // Memoize loading and error states
  const isLoading = useMemo(
    () => isWeatherFetching || isTimeFetching,
    [isWeatherFetching, isTimeFetching]
  );
  const isError = useMemo(
    () => isWeatherError || isTimeError,
    [isWeatherError, isTimeError]
  );

  // Memoize background color based on weather condition
  const boxBackgroundColor = useMemo(() => {
    if (locationWeather?.weathercode) {
      const condition =
        mapConditionCode[locationWeather.weathercode][
          locationWeather.isDay ? "day" : "night"
        ];
      return condition.color;
    }
    return "#fff"; // Default background color
  }, [locationWeather]);

  // Effect to set conditions when locationWeather updates
  useEffect(() => {
    if (locationWeather) {
      const { isDay, isRaining } = locationWeather;
      setConditions({ isDay, isRaining });
    }
  }, [locationWeather, setConditions]);

  const handleResearch = (location: Location) => {
    getLocationWeatherQuery(location);
    getLocationTimeQuery(location);
  };

  return (
    <Card
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: boxBackgroundColor,
      }}
    >
      <Typography
        color={PaletteColors.TEXT}
        fontWeight={500}
        variant="h4"
        textAlign="center"
        mb={2}
      >
        Search a city!
      </Typography>
      <SearchInput onSelectLocation={handleResearch} />
      {isLoading && (
        <Box mt={2}>
          <CircularProgress color="success" />
        </Box>
      )}
      {isError && <GenericErrorMessage />}
      {locationTime && locationWeather && (
        <SearchResult time={locationTime} weather={locationWeather} />
      )}
    </Card>
  );
};

export default SearchBox;
