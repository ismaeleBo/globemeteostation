interface Weather {
  description: string;
  image: string;
  color: string;
}

interface DayNightWeather {
  day: Weather;
  night: Weather;
}

interface WeatherData {
  [key: string]: DayNightWeather;
}

export const mapConditionCode: WeatherData = {
  "0": {
    day: {
      description: "Sunny",
      image: "http://openweathermap.org/img/wn/01d@2x.png",
      color: "#fff",
    },
    night: {
      description: "Clear",
      image: "http://openweathermap.org/img/wn/01n@2x.png",
      color: "#fff",
    },
  },
  "1": {
    day: {
      description: "Mainly Sunny",
      image: "http://openweathermap.org/img/wn/01d@2x.png",
      color: "#fff",
    },
    night: {
      description: "Mainly Clear",
      image: "http://openweathermap.org/img/wn/01n@2x.png",
      color: "#fff",
    },
  },
  "2": {
    day: {
      description: "Partly Cloudy",
      image: "http://openweathermap.org/img/wn/02d@2x.png",
      color: "#b4b4b4",
    },
    night: {
      description: "Partly Cloudy",
      image: "http://openweathermap.org/img/wn/02n@2x.png",
      color: "#b4b4b4",
    },
  },
  "3": {
    day: {
      description: "Cloudy",
      image: "http://openweathermap.org/img/wn/03d@2x.png",
      color: "#b4b4b4",
    },
    night: {
      description: "Cloudy",
      image: "http://openweathermap.org/img/wn/03n@2x.png",
      color: "#b4b4b4",
    },
  },
  "45": {
    day: {
      description: "Foggy",
      image: "http://openweathermap.org/img/wn/50d@2x.png",
      color: "#fff",
    },
    night: {
      description: "Foggy",
      image: "http://openweathermap.org/img/wn/50n@2x.png",
      color: "#fff",
    },
  },
  "48": {
    day: {
      description: "Rime Fog",
      image: "http://openweathermap.org/img/wn/50d@2x.png",
      color: "#fff",
    },
    night: {
      description: "Rime Fog",
      image: "http://openweathermap.org/img/wn/50n@2x.png",
      color: "#fff",
    },
  },
  "51": {
    day: {
      description: "Light Drizzle",
      image: "http://openweathermap.org/img/wn/09d@2x.png",
      color: "#b4b4b4",
    },
    night: {
      description: "Light Drizzle",
      image: "http://openweathermap.org/img/wn/09n@2x.png",
      color: "#b4b4b4",
    },
  },
  "53": {
    day: {
      description: "Drizzle",
      image: "http://openweathermap.org/img/wn/09d@2x.png",
      color: "#b4b4b4",
    },
    night: {
      description: "Drizzle",
      image: "http://openweathermap.org/img/wn/09n@2x.png",
      color: "#b4b4b4",
    },
  },
  "55": {
    day: {
      description: "Heavy Drizzle",
      image: "http://openweathermap.org/img/wn/09d@2x.png",
      color: "#b4b4b4",
    },
    night: {
      description: "Heavy Drizzle",
      image: "http://openweathermap.org/img/wn/09n@2x.png",
      color: "#b4b4b4",
    },
  },
  "56": {
    day: {
      description: "Light Freezing Drizzle",
      image: "http://openweathermap.org/img/wn/09d@2x.png",
      color: "#b4b4b4",
    },
    night: {
      description: "Light Freezing Drizzle",
      image: "http://openweathermap.org/img/wn/09n@2x.png",
      color: "#b4b4b4",
    },
  },
  "57": {
    day: {
      description: "Freezing Drizzle",
      image: "http://openweathermap.org/img/wn/09d@2x.png",
      color: "#b4b4b4",
    },
    night: {
      description: "Freezing Drizzle",
      image: "http://openweathermap.org/img/wn/09n@2x.png",
      color: "#b4b4b4",
    },
  },
  "61": {
    day: {
      description: "Light Rain",
      image: "http://openweathermap.org/img/wn/10d@2x.png",
      color: "#b4b4b4",
    },
    night: {
      description: "Light Rain",
      image: "http://openweathermap.org/img/wn/10n@2x.png",
      color: "#b4b4b4",
    },
  },
  "63": {
    day: {
      description: "Rain",
      image: "http://openweathermap.org/img/wn/10d@2x.png",
      color: "#b4b4b4",
    },
    night: {
      description: "Rain",
      image: "http://openweathermap.org/img/wn/10n@2x.png",
      color: "#b4b4b4",
    },
  },
  "65": {
    day: {
      description: "Heavy Rain",
      image: "http://openweathermap.org/img/wn/10d@2x.png",
      color: "#b4b4b4",
    },
    night: {
      description: "Heavy Rain",
      image: "http://openweathermap.org/img/wn/10n@2x.png",
      color: "#b4b4b4",
    },
  },
  "66": {
    day: {
      description: "Light Freezing Rain",
      image: "http://openweathermap.org/img/wn/10d@2x.png",
      color: "#b4b4b4",
    },
    night: {
      description: "Light Freezing Rain",
      image: "http://openweathermap.org/img/wn/10n@2x.png",
      color: "#b4b4b4",
    },
  },
  "67": {
    day: {
      description: "Freezing Rain",
      image: "http://openweathermap.org/img/wn/10d@2x.png",
      color: "#b4b4b4",
    },
    night: {
      description: "Freezing Rain",
      image: "http://openweathermap.org/img/wn/10n@2x.png",
      color: "#b4b4b4",
    },
  },
  "71": {
    day: {
      description: "Light Snow",
      image: "http://openweathermap.org/img/wn/13d@2x.png",
      color: "#fff",
    },
    night: {
      description: "Light Snow",
      image: "http://openweathermap.org/img/wn/13n@2x.png",
      color: "#fff",
    },
  },
  "73": {
    day: {
      description: "Snow",
      image: "http://openweathermap.org/img/wn/13d@2x.png",
      color: "#fff",
    },
    night: {
      description: "Snow",
      image: "http://openweathermap.org/img/wn/13n@2x.png",
      color: "#fff",
    },
  },
  "75": {
    day: {
      description: "Heavy Snow",
      image: "http://openweathermap.org/img/wn/13d@2x.png",
      color: "#fff",
    },
    night: {
      description: "Heavy Snow",
      image: "http://openweathermap.org/img/wn/13n@2x.png",
      color: "#fff",
    },
  },
  "77": {
    day: {
      description: "Snow Grains",
      image: "http://openweathermap.org/img/wn/13d@2x.png",
      color: "#fff",
    },
    night: {
      description: "Snow Grains",
      image: "http://openweathermap.org/img/wn/13n@2x.png",
      color: "#fff",
    },
  },
  "80": {
    day: {
      description: "Light Showers",
      image: "http://openweathermap.org/img/wn/09d@2x.png",
      color: "#b4b4b4",
    },
    night: {
      description: "Light Showers",
      image: "http://openweathermap.org/img/wn/09n@2x.png",
      color: "#b4b4b4",
    },
  },
  "81": {
    day: {
      description: "Showers",
      image: "http://openweathermap.org/img/wn/09d@2x.png",
      color: "#b4b4b4",
    },
    night: {
      description: "Showers",
      image: "http://openweathermap.org/img/wn/09n@2x.png",
      color: "#b4b4b4",
    },
  },
  "82": {
    day: {
      description: "Heavy Showers",
      image: "http://openweathermap.org/img/wn/09d@2x.png",
      color: "#b4b4b4",
    },
    night: {
      description: "Heavy Showers",
      image: "http://openweathermap.org/img/wn/09n@2x.png",
      color: "#b4b4b4",
    },
  },
  "85": {
    day: {
      description: "Light Snow Showers",
      image: "http://openweathermap.org/img/wn/13d@2x.png",
      color: "#b4b4b4",
    },
    night: {
      description: "Light Snow Showers",
      image: "http://openweathermap.org/img/wn/13n@2x.png",
      color: "#b4b4b4",
    },
  },
  "86": {
    day: {
      description: "Snow Showers",
      image: "http://openweathermap.org/img/wn/13d@2x.png",
      color: "#b4b4b4",
    },
    night: {
      description: "Snow Showers",
      image: "http://openweathermap.org/img/wn/13n@2x.png",
      color: "#b4b4b4",
    },
  },
  "95": {
    day: {
      description: "Thunderstorm",
      image: "http://openweathermap.org/img/wn/11d@2x.png",
      color: "#b4b4b4",
    },
    night: {
      description: "Thunderstorm",
      image: "http://openweathermap.org/img/wn/11n@2x.png",
      color: "#b4b4b4",
    },
  },
  "96": {
    day: {
      description: "Light Thunderstorms With Hail",
      image: "http://openweathermap.org/img/wn/11d@2x.png",
      color: "#b4b4b4",
    },
    night: {
      description: "Light Thunderstorms With Hail",
      image: "http://openweathermap.org/img/wn/11n@2x.png",
      color: "#b4b4b4",
    },
  },
  "99": {
    day: {
      description: "Thunderstorm With Hail",
      image: "http://openweathermap.org/img/wn/11d@2x.png",
      color: "#b4b4b4",
    },
    night: {
      description: "Thunderstorm With Hail",
      image: "http://openweathermap.org/img/wn/11n@2x.png",
      color: "#b4b4b4",
    },
  },
};
