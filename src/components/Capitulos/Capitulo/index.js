import React from 'react'

export const Capitulo = ({ fetchData }) => {
  return fetchData.data.map((item) => {
    return (
      <a key={item.mal_id} className="grid__item" href={item.url}>
        <div className="item__card-img">
          <img src={item.images.jpg.large_image_url} alt={item.title} />
          <span>{item.episodes}</span>
          <span className="">{item.source}</span>
        </div>
        <div className="item__card-parrafo">
          <p>{item.title}</p>
        </div>
      </a>
    )
  })
}
