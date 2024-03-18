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
    <div className='flex flex-col md:flex-row text-center'>
      {
        cities.map((city: SearchByCity) => (
          <button 
            key={city.id}
            className='flex-col m-5 p-6 items-center border rounded-xl'
            onClick={() => byCity(city.url)}
          >
            <h2>{city.name}</h2>
            <h3>{city.region}</h3>
            <h3>{city.country}</h3>
            <h3>{city.url}</h3>
          </button>
        ))
      }
    </div>
  )
}

export default ListCity