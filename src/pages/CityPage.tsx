import { useContext } from 'react'
import WeatherContext from '../context/Context';


function CityPage() {
  const { weatherCity } = useContext(WeatherContext)
  return (
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
  )
}

export default CityPage