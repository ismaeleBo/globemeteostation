import {
  LocationWeather,
  GetLocationWeatherQueryResponse,
  GetLocationsQueryResponseItem,
  GetLocationsQueryRawResponse,
  GetLocationsQueryRawResponseItem,
} from "./types";

export const transformGetLocationWeatherQueryResponse = (
  response: GetLocationWeatherQueryResponse
): LocationWeather => {
  return response.current_weather;
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
