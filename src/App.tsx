import { useState } from 'react'
import { searchCities } from './helpers/weatherApi'
import { SearchByCity } from './types'
import ListCity from './components/ListCities/ListCity';

// const initalWeatherCity: WeatherByCity = {
//   name: '',
//   country: '',
//   temp: 0,
//   condition: '',
//   icon: '',
//   url: '',
// }

function App() {
  const [search, setSearch] = useState('');
  // const [tempo, setTempo] = useState<WeatherByCity>();
  const [cities, setCities] = useState<SearchByCity[]>([]); 

  const handleSearch = async (cityURL: string) => {
    // const data = await getWeatherByCity(cityURL); 
    const res = await searchCities(cityURL); 
    // setTempo(data);
    setCities(res);
    setSearch('');
  };
  console.log(cities);
  
  return (
    <main className='flex flex-col items-center'>
      <div className=''>
        <input 
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder='Digite o nome da cidade'
        />
        <button onClick={() => handleSearch(search)}>Pesquisar</button>
      </div>
      { cities.length > 0 && <ListCity cities={cities} />}
      {/* <div>
        {
          tempo && (
            <div>
              <h2>{tempo.name}</h2>
              <h3>{tempo.country}</h3>
              <h3>{tempo.temp}°C</h3>
              <h3>{tempo.condition}</h3>
              <img src={tempo.icon} alt={tempo.condition} />
              <a href={tempo.url}>Detalhes</a>
            </div>
          )
        }
      </div> */}
    </main>
  )
}

export default App
