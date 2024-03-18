import { SearchByCity } from '../../types'

type CitiesProps = {
  cities: SearchByCity[]
}

function ListCity({ cities }: CitiesProps) {

  if (cities.length === 0) {
    return <h2>Nenhuma cidade encontrada</h2>
  }

  return (
    <div>
      {
        cities.map((city: SearchByCity) => (
          <div key={city.id}>
            <h2>{city.name}</h2>
            <h3>{city.country}</h3>
            <h3>{city.region}</h3>
          </div>
        ))
      }
    </div>
  )
}

export default ListCity