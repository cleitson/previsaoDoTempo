import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import WeatherContext from '../context/Context';
import SearchBar from '../components/SearchBar/SearchBar';
import Logo from '../assets/logo.svg'
import IconChuva from '../assets/icons/IconChuva.svg'
import IconTemp from '../assets/icons/IconTemp.svg'
import IconUmidade from '../assets/icons/IconUmidade.svg'
import IconVento from '../assets/icons/IconVento.svg'
import IconUV from '../assets/icons/IconUV.svg'
import Home from './Home';



function CityPage() {
  const navigate = useNavigate()
  const { weatherCity, forecast, bgImage } = useContext(WeatherContext)

  if (!weatherCity) return <Home />

  const dayOfWeek = (day: string): string => {
    const date = new Date(day);
    const dayOfWeek = date.toLocaleDateString("pt-BR", { weekday: "long", timeZone: "UTC" });
    const formattedDay = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);
    return formattedDay;
  }

  return (
    <main className='grid grid-cols-1 md:grid-cols-2 h-full md:h-screen font-nunito bg-imagebackground bg-cover p-2'>
      <div className='flex flex-col'>
        <div className='flex items-start m-2 gap-3'>
          <button className='bg-gray600 rounded pr-3 p-3' onClick={() => navigate('/')}>
            <img src={Logo} alt="img de logo para homepage" />
          </button>
          <SearchBar />
        </div>
        <div className={`bg-${bgImage} bg-cover flex m-2 rounded-lg h-96 md:h-3/4`}>
          {
            weatherCity && (
              <div className='flex flex-col w-full justify-between p-2'>
                <div className='flex items-center justify-between p-2 m-2 '>
                  <div className='flex flex-col font-bold text-2xl md:text-3xl gap-2'>
                    <span>{weatherCity.name}, {weatherCity.region}</span>
                    <span>{weatherCity.country}</span>
                  </div>
                  <div className='flex flex-col text-center'>
                    <span className='font-normal text-xl'>{dayOfWeek(weatherCity.localtime)}</span>
                    <span className='font-bold text-2xl md:text-5xl'>{weatherCity.localtime.split(' ')[1]}</span>
                  </div>
                </div>
                <div className='flex items-center justify-between p-2 m-2 '>
                  <div className='flex flex-col'>
                    <span className='text-5xl font-bold m-2'>{weatherCity.temp}°C</span>
                    <span className='text-xl m-2'>{weatherCity.condition}</span>
                  </div>
                  <img src={weatherCity.icon} alt={weatherCity.condition} className='w-32' />
                </div>
              </div>
            )
          }

        </div>
      </div>
      <div className='flex flex-col'>
        <div className='bg-gray800 flex flex-col m-2 gap-3 p-2 rounded-lg'>
          <div className='flex m-1 p-1 text-gray400 '>
            <span>Detalhes do clima hoje</span>
          </div>
          <div className='flex justify-between m-3 border-b-2 border-gray600 pb-2'>
            <div className='flex gap-3'>
              <img src={IconTemp} />
              <span className='text-gray200'>Sensação térmica</span>
            </div>
            <span className='text-gray100'>{`${weatherCity?.feelslike_c} °C`}</span>
          </div>
          <div className='flex justify-between m-3 border-b-2 border-gray600 pb-2'>
            <div className='flex gap-3'>
              <img src={IconChuva} />
              <span className='text-gray200'>Probabilidade de chuva</span>
            </div>
            <span className='text-gray100'>{`${forecast[0].day.daily_chance_of_rain}%`}</span>
          </div>
          <div className='flex justify-between m-3 border-b-2 border-gray600 pb-2'>
            <div className='flex gap-3'>
              <img src={IconUmidade} />
              <span className='text-gray200'>Umidade do ar</span>
            </div>
            <span className='text-gray100'>{`${weatherCity?.humidity}%`}</span>
          </div>
          <div className='flex justify-between m-3 border-b-2 border-gray600 pb-2'>
            <div className='flex gap-3'>
              <img src={IconUV} />
              <span className='text-gray200'>UV</span>
            </div>
            <span className='text-gray100'>{`${weatherCity?.uv}`}</span>
          </div>
          <div className='flex justify-between m-3 border-b-2 border-gray600 pb-2'>
            <div className='flex gap-3'>
              <img src={IconVento} />
              <span className='text-gray200'>Velocidade do vento</span>
            </div>
            <span className='text-gray100'>{`${weatherCity?.wind_kph} km/h`}</span>
          </div>
        </div>
        <div className='bg-gray800 flex justify-around m-2 gap-9 p-2 rounded-lg'>
          {
            forecast.slice(1).map((day) => (
              <div key={day.date} className='flex flex-col items-center p-3 gap-1 text-gray100'>
                <span>{dayOfWeek(day.date)}</span>
                <img src={day.day.condition.icon} alt={day.day.condition.text} />
                <span className='text-center'>{day.day.condition.text}</span>
                <div className='flex flex-col gap-1'>
                  <span>{day.day.maxtemp_c} °C</span>
                  <span className='text-gray400'>{day.day.mintemp_c} °C</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className='col-span-full flex items-center justify-center'>
        <a href="https://www.weatherapi.com/" title="Free Weather API">
          <img
            src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png'
            alt="Weather data by WeatherAPI.com"
          />
        </a>
      </div>
    </main>
  )
}

export default CityPage