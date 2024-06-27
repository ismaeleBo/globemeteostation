export const GET_LOCATIONS_URL =
  "https://nominatim.openstreetmap.org/search.php" as const;

export const GET_WEATHER_URL = "https://api.open-meteo.com/v1" as const;

export const TIMEZONEDB_APIKEY = process.env.REACT_APP_TIMEZONEDB_API_KEY;

export const GET_LOCATION_TIME_URL = `http://api.timezonedb.com/v2.1` as const;
