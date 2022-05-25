import React, { useContext } from 'react'
import { AppContext } from '../Context'

export const Search = () => {
  const { searchDataValue } = useContext(AppContext)

  return (
    <div className="container">
      <section className="capitulos busquda">
        <h1>Resultados de la búsqueda</h1>
        <div className="grid">
          {searchDataValue &&
            searchDataValue.data.map((item) => {
              return (
                <a key={item.mal_id} className="grid__item" href={item.url}>
                  <div className="item__card-img">
                    <img
                      src={item.images.jpg.large_image_url}
                      alt={item.title}
                    />
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
