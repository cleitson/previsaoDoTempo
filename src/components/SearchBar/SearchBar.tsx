import { useState } from 'react'
import { Search } from 'lucide-react';
import { searchCities, getWeatherByCity, getForecastByCity } from '../../helpers/weatherApi'
import { Forecast, SearchByCity, WeatherByCity } from '../../types'
import ListCity from '../ListCities/ListCity';


function SearchBar() {

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
    <>
    <div className="relative w-64">
        <input
          type="text"
          className="pr-10 p-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder='Digite o nome da cidade'
        />
        <span className="absolute inset-y-0 right-0 flex items-center pr-3">
          <button onClick={() => handleSearch(search)}><Search /></button>
        </span>
      </div>
    {showCities && <ListCity cities={cities} byCity={handleSearchByCity} />}
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
    </>
  )
}

export default SearchBar