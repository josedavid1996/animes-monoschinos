import { useFetch } from '../../hook/useFetch'

export const Capitulos = () => {
  const { fetchData } = useFetch('https://api.jikan.moe/v4/top/anime?limit=25')

  return <div>{fetchData && console.log(fetchData.data)}</div>
}
