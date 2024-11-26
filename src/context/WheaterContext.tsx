import { useState } from "react";
import WeatherContext from "./Context";
import { Forecast, SearchByCity, WeatherByCity } from "../types";


type ContextProviderProps = {
  children: React.ReactNode;
};

export default function WeatherProvider({ children }: ContextProviderProps) {

  const [loading, setLoading] = useState<boolean>(false)
  const [cities, setCities] = useState<SearchByCity[]>([]);
  const [showCities, setShowCities] = useState<boolean>(false);
  const [weatherCity, setWeatherCity] = useState<WeatherByCity>();
  const [forecast, setForecast] = useState<Forecast[]>([]);

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
  };

  return (
    <WeatherContext.Provider value={ Values }>
      {children}
    </WeatherContext.Provider>
  );
}