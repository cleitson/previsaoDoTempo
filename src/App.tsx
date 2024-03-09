import { useState } from 'react'
import { getWeatherByCity } from './helpers/weatherApi'
import { WeatherCity } from './types'

const initalWeatherCity: WeatherCity = {
  name: '',
  country: '',
  temp: 0,
  condition: '',
  icon: '',
  url: '',
}

function App() {
  const [search, setSearch] = useState('');
  const [tempo, setTempo] = useState<WeatherCity>(initalWeatherCity);

  const searchCities = async (cityURL: string) => {
    const data = await getWeatherByCity(cityURL);
    setTempo(data);
    setSearch('');
  };

  return (
    <>
      <div>
        <label htmlFor="searchLabel">Buscar cidade</label>
        <input 
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button onClick={() => searchCities(search)}>Pesquisar</button>
      </div>
      <div>
        {
          tempo != initalWeatherCity ? (
            <div>
              <h2>{tempo.name}</h2>
              <h3>{tempo.country}</h3>
              <h3>{tempo.temp}°C</h3>
              <h3>{tempo.condition}</h3>
              <img src={tempo.icon} alt={tempo.condition} />
              <a href={tempo.url}>Detalhes</a>
            </div>
          ): (<p></p>)
        }
      </div>
    </>
  )
}

export default App
