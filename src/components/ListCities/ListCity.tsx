import { SearchByCity } from '../../types'

type CitiesProps = {
  cities: SearchByCity[]
  byCity: (cityURL: string) => void
}

function ListCity({ cities, byCity }: CitiesProps) {

  if (cities.length === 0) {
    return <h2>Nenhuma cidade encontrada</h2>
  }

  return (
    <div className='flex flex-col text-center p-5'>
      {
        cities.map((city: SearchByCity) => (
          <button 
            key={city.id}
            className='flex-col m-3 p-4 items-center bg-gray500 rounded-xl w-80 md:w-96'
            onClick={() => byCity(city.url)}            
          >
            <span className='text-gray100'>{city.name} - {city.region}, {city.country}</span>
          </button>
        ))
      }
    </div>
  )
}

export default ListCity