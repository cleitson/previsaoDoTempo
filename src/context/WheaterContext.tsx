import { useMemo, useState } from "react";
import WeatherContext from "./Context";
import { Forecast, SearchByCity, WeatherByCity } from "../types";
import { weatherConditions } from "../helpers/weatherConditions";


type ContextProviderProps = {
  children: React.ReactNode;
};

export default function WeatherProvider({ children }: ContextProviderProps) {

  const [loading, setLoading] = useState<boolean>(false)
  const [cities, setCities] = useState<SearchByCity[]>([]);
  const [showCities, setShowCities] = useState<boolean>(false);
  const [weatherCity, setWeatherCity] = useState<WeatherByCity>();
  const [forecast, setForecast] = useState<Forecast[]>([]);
  const [bgImage, setBgImage] = useState<string>('ClearDay');


  const filterBg = (codeTemp: number | undefined): string => {
    for (const [key, values] of Object.entries(weatherConditions)) {
      if (values.includes(codeTemp as number)) {
        return key;
      }
    }
    return 'Clear';
  }

  useMemo(() => {
    const temp = filterBg(weatherCity?.code);
    const day = weatherCity?.is_day === 1 ? 'Day' : 'Night';
    setBgImage(`${temp}${day}`);
  }, [weatherCity]);

  const Values = {
    loading,
    setLoading,
    cities,
    setCities,
    showCities,
    setShowCities,
    weatherCity,
    setWeatherCity,
    forecast,
    setForecast,
    bgImage,
  };

  return (
    <WeatherContext.Provider value={ Values }>
      {children}
    </WeatherContext.Provider>
  );
}