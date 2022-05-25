import { useFetch } from '../../hook/useFetch'
import { Loader } from '../Loader'
import { Capitulo } from './Capitulo'
import banner from '../../assets/banner.jpg'

export const Capitulos = () => {
  const { fetchData, isPending } = useFetch(
    'https://api.jikan.moe/v4/top/anime?limit=25'
  )

  return (
    <div className="container">
      <section className="capitulos">
        <h1>Capitulos Recientes</h1>
        <img src={banner} alt="banner" className="capitulos__banner" />
        <div className="grid">
          {isPending ? <Loader /> : <Capitulo fetchData={fetchData} />}
        </div>
        <button type="button" className="btn btn-lg">
          cargar comentarios
        </button>
      </section>
    </div>
  )
}
