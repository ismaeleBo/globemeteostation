import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";
import { GET_WEATHER_URL } from "../constants";
import {
  CurrentLocationWeather,
  GetWeatherQueryResponse,
  Location,
} from "../types";

const fetchWeather = async (
  location: Location
): Promise<CurrentLocationWeather> => {
  const urlParams = `forecast?latitude=${location.lat}&longitude=${location.lon}&current_weather=true`;
  const url = `${GET_WEATHER_URL}/${urlParams}`;
  const response = await axios.get<GetWeatherQueryResponse>(url);
  return response.data.current_weather;
};

const getQueryFn = (location: Location | undefined) => {
  if (!location) {
    return () => Promise.resolve(null);
  }
  return () => fetchWeather(location);
};

const useWeatherQuery = () => {
  const [location, setLocation] = useState<Location | undefined>();

  const { data, isFetching, isError } = useQuery({
    queryKey: ["weather", location],
    queryFn: getQueryFn(location),
    // disabled as long as location is unknown
    enabled: !!location,
  });

  const getWeatherQuery = (location: Location) => {
    if (!location) {
      return;
    }

    setLocation(location);
  };

  return { getWeatherQuery, data, isFetching, isError };
};

export default useWeatherQuery;
