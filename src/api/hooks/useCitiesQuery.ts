import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { GET_CITIES_URL } from "../constants";
import initialData from "../initialData/initialCities.json";

const useCitiesQuery = () => {
  const [searchText, setSearchText] = useState("");

  const fetchCities = async (name: string) => {
    const url = `${GET_CITIES_URL}?q=${name}&format=jsonv2`;
    const response = await fetch(url);
    return response.json();
  };

  const { data, isFetching, isError } = useQuery({
    queryKey: ["cities", searchText],
    queryFn: () => fetchCities(searchText),
    initialData,
    // disabled as long as the search text is empty
    enabled: !!searchText,
  });

  const listOptions = useMemo(() => {
    if (data?.length) {
      const cities = data.map((city: any) => ({
        label: city.display_name,
        id: city.osm_id,
        lat: city.lat,
        lon: city.lon,
      }));

      // remove duplicates
      const map = new Map();
      cities.forEach((city: any) => {
        if (!map.has(city["label"])) {
          map.set(city["label"], city);
        }
      });
      return Array.from(map.values());
    }

    return [];
  }, [data]);

  return { setSearchText, listOptions, isFetching, isError };
};

export default useCitiesQuery;
