import { SearchByCity } from '../../types'
import WeatherContext from '../../context/Context';
import { useContext } from 'react';
import { getForecastByCity, getWeatherByCity } from '../../helpers/weatherApi';
import { useNavigate } from 'react-router-dom';

type CitiesProps = {
  cities: SearchByCity[]
}

function ListCity({ cities }: CitiesProps) {
  const navigate = useNavigate();
  const { setWeatherCity, setForecast } = useContext(WeatherContext);

  if (cities.length === 0) {
    return <h2 className='mt-10 text-bluelight'>Nenhuma cidade encontrada</h2>
  }

  const handleSearchByCity = async (cityURL: string) => {
    const resPromise = getWeatherByCity(cityURL);
    const dataPromise = getForecastByCity(cityURL);
    const [res, data] = await Promise.all([resPromise, dataPromise]);
    setWeatherCity(res);
    setForecast(data);
    navigate('/citypage');
  }

  return (
    <div className='flex flex-col text-center p-5'>
      {
        cities.map((city: SearchByCity) => (
          <button 
            key={city.id}
            className='flex-col m-3 p-4 items-center bg-gray500 rounded-xl w-80 md:w-96 md:hover:scale-110'
            onClick={() => handleSearchByCity(city.url)}            
          >
            <span className='text-gray100'>{city.name} - {city.region}, {city.country}</span>
          </button>
        ))
      }
    </div>
  )
}

export default ListCity