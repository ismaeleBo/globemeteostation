export interface Location {
  lat: number;
  lon: number;
}

export interface GetCityQueryResponseItem {
  osm_id: number;
  display_name: string;
  lat: string;
  lon: string;
}

export type GetCityQueryResponse = GetCityQueryResponseItem[];

export interface CurrentLocationWeather {
  temperature: number;
  windspeed: number;
  is_day: number;
  weathercode: number;
}

export interface GetWeatherQueryResponse {
  current_weather: CurrentLocationWeather;
}

export interface GetLocationTimeQueryResponse {
  countryName: string;
  regionName: string;
  cityName: string;
  formatted: string;
}
