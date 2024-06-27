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

export interface LocationWeather {
  temperature: number;
  windspeed: number;
  is_day: number;
  weathercode: number;
}

export interface GetLocationWeatherQueryResponse {
  current_weather: LocationWeather;
}

export interface GetLocationTimeQueryResponse {
  countryName: string;
  regionName: string;
  cityName: string;
  formatted: string;
}
