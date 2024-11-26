import { useContext } from 'react'
import WeatherContext from '../context/Context';


function CityPage() {
  const { weatherCity, forecast } = useContext(WeatherContext) 
  return (
    <main className='flex flex-col items-center h-screen font-sans bg-imagebackground bg-repeat'>
        {
          weatherCity && (
            <div>
              <h2>{weatherCity.name}</h2>
              <h3>{weatherCity.country}</h3>
              <h3>{weatherCity.temp}°C</h3>
              <h3>{weatherCity.condition}</h3>
              <img src={weatherCity.icon} alt={weatherCity.condition} />
            </div>
          )
        }
      </main>
  )
}

export default CityPage