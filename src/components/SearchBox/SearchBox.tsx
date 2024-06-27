import { Box, Card, CircularProgress, Typography } from "@mui/material";
import { PaletteColors } from "../../theme/palette";
import SearchInput from "../SearchInput";
import { Location } from "../../api/types";
import SearchResult from "../SearchResult";
import {
  useLazyGetLocationTimeQuery,
  useLazyGetLocationWeatherQuery,
} from "../../api";

const SearchBox: React.FC = () => {
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

  const handleResearch = (location: Location) => {
    getLocationWeatherQuery(location);
    getLocationTimeQuery(location);
  };

  const isLoading = isWeatherFetching || isTimeFetching;
  const isError = isWeatherError || isTimeError;

  return (
    <Card
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
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
      {isError && (
        <Typography mt={2} color={PaletteColors.WARNING} variant="body1">
          An error occurred, please try again
        </Typography>
      )}
      {locationTime && locationWeather && (
        <SearchResult
          cityName={`${locationTime.cityName}, ${locationTime.countryName}`}
          temperature={locationWeather.temperature.toString()}
          date={locationTime.formatted}
        />
      )}
    </Card>
  );
};

export default SearchBox;
