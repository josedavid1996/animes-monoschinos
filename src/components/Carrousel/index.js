// import React, { useRef } from 'react'
import { useFetch } from '../../hook/useFetch'
import Glider, { GliderMethods } from 'react-glider'

export const Corrousel = () => {
  const { fetchData } = useFetch('https://api.jikan.moe/v4/top/anime?limit=8')
  // const gliderRef = useRef<GliderMethods />

  return (
    <div className="carousel__container">
      <button>
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <Glider
        hasArrows={true}
        hasDots
        slidesToShow={2}
        slidesToScroll={1}
        // ref={gliderRef}
      >
        {fetchData &&
          fetchData.data.map((item) => {
            return (
              <>
                <img src={item.images.jpg.image_url} alt={item.title} />
                <p>{item.title}</p>
              </>
            )
          })}
      </Glider>

      <button>
        <i class="fa-solid fa-chevron-rigth"></i>
      </button>
    </div>
  )
}
