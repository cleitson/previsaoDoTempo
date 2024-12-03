import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import WeatherContext from '../context/Context';
import SearchBar from '../components/SearchBar/SearchBar';
import Logo from '../assets/logo.svg'
// import { bgMap } from '../helpers/weatherConditions';
import IconChuva from '../assets/icons/IconChuva.svg'
import IconTemp from '../assets/icons/IconTemp.svg'
import IconUmidade from '../assets/icons/IconUmidade.svg'
import IconVento from '../assets/icons/IconVento.svg'
import IconUV from '../assets/icons/IconUV.svg'



function CityPage() {
  const navigate = useNavigate()
  const { weatherCity,forecast, bgImage } = useContext(WeatherContext)

  return (
    <main className='flex flex-col gap-10 md:flex-row w-screen h-screen font-nunito bg-imagebackground p-2'>
      <div className='flex flex-col'>
        <div className='flex items-start m-2 gap-3'>
          <button className='bg-gray600 rounded pr-3 p-3' onClick={() => navigate('/')}>
            <img src={Logo} alt="img de logo para homepage" />
          </button>
          <SearchBar />
        </div>
        <div className={`bg-${bgImage} bg-auto flex m-2 rounded-lg h-80`}>
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
      <div className='flex flex-col'>
        <div className='bg-gray800 flex flex-col m-2 gap-3 p-2 rounded-lg'>
          <div className='flex m-1 p-1 text-gray400 '>
            <span>Detalhes do clima hoje</span>
          </div>
          <div className='flex justify-between m-3 border-b-2 border-gray600 pb-2'>
            <div className='flex gap-3'>
              <img src={IconTemp}/>
              <span className='text-gray200'>Sensação térmica</span>
            </div>
            <span className='text-gray100'>{`${weatherCity?.feelslike_c}°C`}</span>
          </div>
          <div className='flex justify-between m-3 border-b-2 border-gray600 pb-2'>
            <div className='flex gap-3'>
              <img src={IconChuva}/>
              <span className='text-gray200'>Probabilidade de chuva</span>
            </div>
            <span className='text-gray100'>{`${forecast[0].day.daily_chance_of_rain}%`}</span>
          </div>
          <div className='flex justify-between m-3 border-b-2 border-gray600 pb-2'>
            <div className='flex gap-3'>
              <img src={IconUmidade}/>
              <span className='text-gray200'>Umidade do ar</span>
            </div>
            <span className='text-gray100'>{`${weatherCity?.humidity}%`}</span>
          </div>
          <div className='flex justify-between m-3 border-b-2 border-gray600 pb-2'>
            <div className='flex gap-3'>
              <img src={IconUV}/>
              <span className='text-gray200'>UV</span>
            </div>
            <span className='text-gray100'>{`${weatherCity?.uv}`}</span>
          </div>
          <div className='flex justify-between m-3 border-b-2 border-gray600 pb-2'>
            <div className='flex gap-3'>
              <img src={IconVento}/>
              <span className='text-gray200'>Velocidade do vento</span>
            </div>
            <span className='text-gray100'>{`${weatherCity?.wind_kph} km/h`}</span>
          </div>
        </div>
        <div className='flex bg-gray500 rounded-xl'>
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
      </div>
    </main>
  )
}

export default CityPage