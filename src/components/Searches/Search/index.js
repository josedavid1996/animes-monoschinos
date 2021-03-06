import React from 'react'

export const Search = ({ searchDataValue }) => {
  return searchDataValue.data.map((item) => {
    return (
      <a key={item.mal_id} className="grid__item" href={item.url}>
        <div className="item__card-img">
          <img src={item.images.jpg.large_image_url} alt={item.title} />
          <span className="">{item.source}</span>
        </div>
        <div className="item__card-parrafo">
          <p>{item.title.slice(0, 20)}</p>
        </div>
      </a>
    )
  })
}
