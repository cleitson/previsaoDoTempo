import { Forecast, SearchByCity, WeatherByCity } from '../types';
const TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = async (term: string): Promise<SearchByCity[]> => {
  const response = await fetch(`https://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`);
  const data = await response.json();
  return data;
};

export const getWeatherByCity = async (cityURL: string): Promise<WeatherByCity> => {
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${cityURL}`);
  const data = await response.json();
  const obj = ({
    name: data.location.name,
    localtime: data.location.localtime,
    country: data.location.country,
    temp: data.current.temp_c,
    condition: data.current.condition.text,
    icon: data.current.condition.icon,
    url: cityURL,
    last_updated: data.current.last_updated,
    region: data.location.region,
    wind_kph: data.current.wind_kph,
    humidity: data.current.humidity,
    feelslike_c: data.current.feelslike_c,
    uv: data.current.uv,
    is_day: data.current.is_day,
    code: data.current.condition.code,
  });
  return obj;
};

export const getForecastByCity = async (cityURL: string): Promise<Forecast[]> => {
  const dias = 3;// dia atual e mais 2 dias no plano free
  const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?lang=pt&key=${TOKEN}&q=${cityURL}&days=${dias}`);
  const data = await response.json();

  const all = data.forecast.forecastday;
  const forecastArray = all.map((day: Forecast) => {
    return {
      date: day.date,
      day: {
        maxtemp_c: day.day.maxtemp_c,
        mintemp_c: day.day.mintemp_c,
        condition: {
          text: day.day.condition.text,
          icon: day.day.condition.icon,
        },
        daily_chance_of_rain: day.day.daily_chance_of_rain,
        uv: day.day.uv,
        
      }
    };
  });  
  return forecastArray;
};
