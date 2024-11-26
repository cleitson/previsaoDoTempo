import SearchBar from "../components/SearchBar/SearchBar"
import logo from '../../public/logo.svg';

function Home() {
  return (
    <main className='flex flex-col items-center h-screen font-sans bg-imagebackground bg-repeat'>
      <div className='flex items-center gap-3 text-lg h-1/4'>
        <img src={logo}></img>
        <h1 className="text-gray100">Weather API</h1>
      </div>
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-2xl md:text-4xl text-gray100">Boas vindas ao <span className="text-bluelight">Weather API</span></h1>
        <p className="text-gray200">Escolha um local para ver a previsão do tempo</p>
      </div>
      <div className="flex flex-col items-center mt-10">
      <SearchBar />
      </div>
    </main>
  )
}

export default Home