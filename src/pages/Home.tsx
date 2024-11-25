import SearchBar from "../components/SearchBar/SearchBar"
import logo from '../../public/logo.svg';

function Home() {
  return (
    <main className='flex flex-col items-center h-screen font-sans bg-imagebackground'>
      <div className='flex items-center gap-3 text-lg h-1/4'>
        <img src={logo}></img>
        <h1>Weather API</h1>
      </div>
      <SearchBar />
    </main>
  )
}

export default Home