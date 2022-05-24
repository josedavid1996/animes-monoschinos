import React from 'react'
import { useFetch } from '../../hook/useFetch'

export const AnimeTop = () => {
  const { fetchData } = useFetch(`https://api.jikan.moe/v4/top/anime?page=2`)
  const fetchDatagenero = useFetch(`https://api.jikan.moe/v4/genres/anime`)

  const alfabeto = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'Ñ',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ]

  return (
    <div className="container">
      <section className="capitulos">
        <h1>Todos los animes</h1>
        <form className="form__select">
          <select name="select_category">
            <option value="Categoria">Categoria</option>
            <option value="anime">Anime</option>
            <option value="manga">Manga</option>
          </select>
          <select name="select_genero">
            <option value="genero">Genero</option>
            {fetchDatagenero.fetchData &&
              fetchDatagenero.fetchData.data.slice(0, 19).map((item) => {
                return (
                  <option value={item.name} key={item.mal_id}>
                    {item.name}
                  </option>
                )
              })}
          </select>
          <select name="año">
            <option>Año</option>
            {fetchData &&
              fetchData.data.map((item) => {
                return (
                  <option key={item.mal_id} value={item.year}>
                    {item.year}
                  </option>
                )
              })}
          </select>
          <select name="letra">
            <option value="value">Letra</option>
            {alfabeto.map((letra) => {
              return (
                <option value={letra} key={letra}>
                  {letra}
                </option>
              )
            })}
          </select>
          <button type="submit" className="btn-outline">
            <i className="fa-solid fa-magnifying-glass icons"></i>
          </button>
        </form>
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
                    {/* <span>{item.episodes}</span>
                    <span className="">{item.source}</span> */}
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
