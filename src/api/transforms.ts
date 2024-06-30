import {
  LocationWeather,
  GetLocationsQueryResponseItem,
  GetLocationsQueryRawResponse,
  GetLocationsQueryRawResponseItem,
  GetLocationWeatherRawQueryResponse,
} from "./types";

export const transformGetLocationWeatherQueryResponse = (
  response: GetLocationWeatherRawQueryResponse
): LocationWeather => {
  const { is_day, weather_code, temperature_2m, precipitation } =
    response.current;

  return {
    isDay: Boolean(is_day),
    weathercode: weather_code,
    temperature: temperature_2m,
    isRaining: Boolean(precipitation),
  };
};

export const transformGetLocationsQueryResponse = (
  response: GetLocationsQueryRawResponse
): GetLocationsQueryResponseItem[] => {
  if (response.length) {
    const locations = response.map(
      (city: GetLocationsQueryRawResponseItem) => ({
        label: city.display_name,
        id: city.osm_id,
        lat: city.lat,
        lon: city.lon,
      })
    );

    // remove duplicates
    const map = new Map();
    locations.forEach((city: any) => {
      if (!map.has(city["label"])) {
        map.set(city["label"], city);
      }
    });
    return Array.from(map.values());
  }

  return [];
};
