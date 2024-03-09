export type WeatherCity = {
  name: string;
  country: string;
  temp: number;
  condition: string;
  icon: string;
  url: string;
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
}
export type ForecastArray = Forecast[];