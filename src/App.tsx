import { useState } from 'react'
import { Search } from 'lucide-react';
import { searchCities, getWeatherByCity, getForecastByCity } from './helpers/weatherApi'
import { Forecast, SearchByCity, WeatherByCity } from './types'
import ListCity from './components/ListCities/ListCity';


function App() {
  const [search, setSearch] = useState('');
  const [cities, setCities] = useState<SearchByCity[]>([]);
  const [showCities, setShowCities] = useState<boolean>(false);
  const [weatherCity, setWeatherCity] = useState<WeatherByCity>();
  const [forecast, setForecast] = useState<Forecast[]>([]);

  const handleSearch = async (cityURL: string) => {
    const res = await searchCities(cityURL);
    setCities(res);
    setShowCities(true);
    setSearch('');
  };

  const handleSearchByCity = async (cityURL: string) => {
    const resPromise = getWeatherByCity(cityURL);
    const dataPromise = getForecastByCity(cityURL);
    const [res, data] = await Promise.all([resPromise, dataPromise]);
    setWeatherCity(res);
    setForecast(data);
    setShowCities(false);
    console.log(res, data);
    
  }
  
  return (
    <main className='flex flex-col items-center'>
      <div className='flex m-5 p-5 gap-2'>
        <input 
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder='Digite o nome da cidade'
        />
        <button onClick={() => handleSearch(search)}><Search /></button>
      </div>
      { showCities && <ListCity cities={cities} byCity={handleSearchByCity} />}
      <div>
        {
          weatherCity && (
            <div>
              <h2>{weatherCity.name}</h2>
              <h3>{weatherCity.country}</h3>
              <h3>{weatherCity.temp}°C</h3>
              <h3>{weatherCity.condition}</h3>
              <img src={weatherCity.icon} alt={weatherCity.condition} />
              <a href={weatherCity.url}>Detalhes</a>
            </div>
          )
        }
      </div>
    </main>
  )
}

export default App
