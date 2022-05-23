import { useFetch } from '../../hook/useFetch'

export const Capitulos = () => {
  const { fetchData } = useFetch('https://api.jikan.moe/v4/top/anime?limit=25')

  return (
    <div className="container">
      <section class="capitulos">
        <h1>Capitulos Recientes</h1>
        {console.log(fetchData)}

        <div className="grid">
          {fetchData &&
            fetchData.data.map((item) => {
              return (
                <a key={item.mal_id} className="grid__item" href={item.url}>
                  <div className="item__card-img">
                    <img
                      src={item.images.jpg.large_image_url}
                      alt={item.title}
                    />
                    <span>{item.episodes}</span>
                    <span className="">{item.source}</span>
                  </div>
                  <div className="item__card-parrafo">
                    <p>{item.title.slice(0, 20)}</p>
                  </div>
                </a>
              )
            })}
        </div>
      </section>
    </div>
  )
}
