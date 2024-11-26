import { useState, useContext } from 'react'
import { Search } from 'lucide-react';
import { searchCities, getWeatherByCity, getForecastByCity } from '../../helpers/weatherApi'
import ListCity from '../ListCities/ListCity';
import WeatherContext from '../../context/Context';


function SearchBar() {
  const {
    cities,
    setCities,
    setWeatherCity,
    setForecast,
  } = useContext(WeatherContext);

  const [search, setSearch] = useState('');
  const [cityError, setCityError] = useState(false);
  const [showCities, setShowCities] = useState<boolean>(false);

  const handleSearch = async (cityURL: string) => {
    if (search.length < 4) {
      setCityError(true);
      return;
    }
    setCityError(false);
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
      <div className="relative w-80 md:w-96">
        <input
          type="text"
          className="pr-10 p-4 w-full bg-gray600 rounded-lg focus:ring-2 focus:ring-bluelight focus:outline-none"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch(search)}
          value={search}
          placeholder='Buscar local'
        />
        <span className="absolute inset-y-0 right-0 flex items-center pr-3">
          <button onClick={() => handleSearch(search)}><Search /></button>
        </span>
      </div>
      { cityError && <span className='text-red-500'>O campo de busca deve possuir 4 ou mais letras</span> }
      { showCities && <ListCity cities={cities} byCity={handleSearchByCity} />}
    </>
  )
}

export default SearchBar