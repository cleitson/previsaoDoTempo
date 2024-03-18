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
};