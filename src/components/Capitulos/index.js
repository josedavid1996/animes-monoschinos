import { useFetch } from '../../hook/useFetch'
import { Loader } from '../Loader'
import { Capitulo } from './Capitulo'

export const Capitulos = () => {
  const { fetchData, isPending } = useFetch(
    'https://api.jikan.moe/v4/top/anime?limit=25'
  )

  return (
    <div className="container">
      <section className="capitulos">
        <h1>Capitulos Recientes</h1>
        <div className="grid">
          {isPending ? <Loader /> : <Capitulo fetchData={fetchData} />}
        </div>
      </section>
    </div>
  )
}
