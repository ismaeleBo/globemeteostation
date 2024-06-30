export interface Location {
  lat: number;
  lon: number;
}

export interface GetLocationsQueryRawResponseItem {
  osm_id: number;
  display_name: string;
  lat: number;
  lon: number;
}

export type GetLocationsQueryRawResponse = GetLocationsQueryRawResponseItem[];

export interface GetLocationsQueryResponseItem {
  id: number;
  label: string;
  lat: number;
  lon: number;
}

export interface RawLocationWeather {
  temperature_2m: number;
  is_day: number;
  weather_code: number;
  precipitation: number;
}

export interface LocationWeather {
  temperature: number;
  isDay: boolean;
  weathercode: number;
  isRaining: boolean;
}

export interface GetLocationWeatherRawQueryResponse {
  current: RawLocationWeather;
}

export interface LocationTime {
  countryName: string;
  regionName: string;
  cityName: string;
  formatted: string;
}

export type GetLocationTimeQueryResponse = LocationTime;
