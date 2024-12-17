import { useContext } from 'react'
import SearchBar from "../components/SearchBar/SearchBar"
import logo from '../assets/logo.svg';
import ListCity from '../components/ListCities/ListCity';
import WeatherContext from '../context/Context';

function Home() {
  const { cities, showCities } = useContext(WeatherContext)

  return (
    <main className='flex flex-col items-center h-screen font-nunito bg-imagebackground bg-cover'>
      <div className='flex items-center gap-3 text-lg h-1/4'>
        <img src={logo}></img>
        <h1 className="text-gray100">Weather API</h1>
      </div>
      <div className="flex flex-col items-center gap-5 p-2">
        <h1 className="text-2xl font-bold md:text-4xl text-gray100">Boas vindas ao <span className="text-bluelight">Weather API</span></h1>
        <p className="text-gray200">Escolha um local para ver a previsão do tempo</p>
      </div>
      <div className="flex flex-col items-center mt-10 w-3/4 md:w-3/6 lg:w-2/6">
        <SearchBar />
        {showCities && <ListCity cities={cities} />}
      </div>
    </main>
  )
}

export default Home