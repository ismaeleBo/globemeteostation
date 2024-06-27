import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GET_LOCATIONS_URL,
  GET_LOCATION_TIME_URL,
  GET_WEATHER_URL,
  TIMEZONEDB_APIKEY,
} from "./constants";
import {
  LocationWeather,
  Location,
  GetLocationTimeQueryResponse,
  GetLocationsQueryResponseItem,
} from "./types";
import {
  transformGetLocationWeatherQueryResponse,
  transformGetLocationsQueryResponse,
} from "./transforms";

export const locationsApi = createApi({
  reducerPath: "locationsApi",
  baseQuery: fetchBaseQuery({ baseUrl: GET_LOCATIONS_URL }),
  endpoints: (builder) => ({
    getLocations: builder.query<GetLocationsQueryResponseItem[], string>({
      query: (name) => `?q=${name}&format=jsonv2`,
      transformResponse: transformGetLocationsQueryResponse,
    }),
  }),
});

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: GET_WEATHER_URL }),
  endpoints: (builder) => ({
    getLocationWeather: builder.query<LocationWeather, Location>({
      query: (location) =>
        `forecast?latitude=${location.lat}&longitude=${location.lon}&current_weather=true`,
      transformResponse: transformGetLocationWeatherQueryResponse,
    }),
  }),
});

export const timeApi = createApi({
  reducerPath: "timeApi",
  baseQuery: fetchBaseQuery({ baseUrl: GET_LOCATION_TIME_URL }),
  endpoints: (builder) => ({
    getLocationTime: builder.query<GetLocationTimeQueryResponse, Location>({
      query: (location) =>
        `get-time-zone?key=${TIMEZONEDB_APIKEY}&format=json&by=position&lat=${location.lat}&lng=${location.lon}`,
    }),
  }),
});

export const { useLazyGetLocationsQuery } = locationsApi;
export const { useLazyGetLocationWeatherQuery } = weatherApi;
export const { useLazyGetLocationTimeQuery } = timeApi;
