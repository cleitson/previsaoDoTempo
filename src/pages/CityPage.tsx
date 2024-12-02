import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import WeatherContext from '../context/Context';
import SearchBar from '../components/SearchBar/SearchBar';
import Logo from '../assets/logo.svg'
import { bgMap } from '../helpers/weatherConditions';



function CityPage() {
  const navigate = useNavigate()
  const { weatherCity,forecast, bgImage } = useContext(WeatherContext)
  
  return (
    <main className='flex flex-col md:flex-row w-screen h-screen font-nunito bg-imagebackground p-2'>
      <div className='flex flex-col'>
        <div className='flex items-start m-2 gap-3'>
          <button className='bg-gray600 rounded pr-3 p-3' onClick={() => navigate('/')}>
            <img src={Logo} alt="img de logo para homepage" />
          </button>
          <SearchBar />
        </div>
        <div className={`${bgMap[bgImage] || 'bg-ClearDay'} bg-auto flex m-2 rounded-lg h-80`}>
          {
            weatherCity && (
              <div className='flex flex-col w-full justify-between'>
                <div className='flex items-center justify-between p-2 m-2 '>
                  <div className='font-bold text-xl'>
                    <span>{weatherCity.name}, {weatherCity.region}</span>
                    <h3>{weatherCity.country}</h3>
                  </div>
                  <div>
                    <span className='font-bold text-xl'>{weatherCity.localtime.split(' ')[1]}</span>
                  </div>
                </div>
                <div className='flex items-center justify-between p-2 m-2 '>
                  <div className='flex flex-col'>
                    <span className='text-5xl font-bold m-2'>{weatherCity.temp}°C</span>
                    <span className='text-sm'>{weatherCity.condition}</span>
                  </div>
                  <img src={weatherCity.icon} alt={weatherCity.condition} />
                </div>
              </div>
            )
          }

        </div>
      </div>
      <div className='flex'>
        {
          forecast.map((day) => (
            <div key={day.date}>
              <h3>{day.date}</h3>
              <h3>{day.day.maxtemp_c}°C</h3>
              <h3>{day.day.mintemp_c}°C</h3>
              <h3>{day.day.condition.text}</h3>
              <img src={day.day.condition.icon} alt={day.day.condition.text} />
            </div>
          ))
        }
      </div>
    </main>
  )
}

export default CityPage