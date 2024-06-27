import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { GetLocationTimeQueryResponse, Location } from "../types";
import { GET_LOCATION_TIME_URL } from "../constants";

const fetchTime = async (
  location: Location
): Promise<GetLocationTimeQueryResponse> => {
  const urlParams = `&format=json&by=position&lat=${location.lat}&lng=${location.lon}`;
  const url = GET_LOCATION_TIME_URL + urlParams;
  const response = await axios.get(url);
  return response.data;
};

const getTimeQueryFn = (location: Location | undefined) => {
  if (!location) {
    return () => Promise.resolve(null);
  }
  return () => fetchTime(location);
};

const useLocationTimeQuery = () => {
  const [location, setLocation] = useState<Location | undefined>();

  const { data, isFetching, isError } = useQuery({
    queryKey: ["time", location],
    queryFn: getTimeQueryFn(location),
    enabled: !!location, // disabled as long as location is unknown
  });

  const getLocationTimeQuery = (location: Location) => {
    if (!location) {
      return;
    }

    setLocation(location);
  };

  return { getLocationTimeQuery, data, isFetching, isError };
};

export default useLocationTimeQuery;
