export type SearchByCity = {
  id: number,
  name: string,
  region: string,
  country: string,
  lat: number,
  lon: number,
  url: string
}

export type WeatherByCity = {
  name: string;
  localtime: string;
  country: string;
  temp: number;
  condition: string;
  icon: string;
  url: string;
  last_updated: string;
  region: string;
  wind_kph: number;
  humidity: number;
  feelslike_c: number;
  uv: number;
  is_day: number;
  code: number;
};

export type Forecast = {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    condition: {
      text: string;
      icon: string;
    }
  
  }
};

export type WeatherContextType = {
  loading: boolean;
  cities: SearchByCity[];
  weatherCity: WeatherByCity | undefined;
  forecast: Forecast[];
  showCities: boolean;
  setLoading: (loading: boolean) => void;
  setCities: (cities: SearchByCity[]) => void;
  setWeatherCity: (weatherCity: WeatherByCity) => void;
  setForecast: (forecast: Forecast[]) => void;
  setShowCities: (showCities: boolean) => void;
}