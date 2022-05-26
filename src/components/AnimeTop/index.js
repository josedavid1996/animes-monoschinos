import React, { useState } from 'react'
import { useFetch } from '../../hook/useFetch'
import { Loader } from '../Loader'
import { ItemTop } from './ItemTop'

export const AnimeTop = () => {
  const [selectValue, setSelectValue] = useState({
    category: 'anime',
    genero: '',
    año: 0,
    letra: ''
  })
  const { fetchData, isPending, setFetchData } = useFetch(
    `https://api.jikan.moe/v4/top/anime?page=2`
  )

  const fetchDatagenero = useFetch('https://api.jikan.moe/v4/genres/anime')
  const years = [
    1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993,
    1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005,
    2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017,
    2018, 2019, 2020, 2021, 2022
  ]
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
  const filtroData = async () => {
    try {
      const resp = await fetch(
        `https://api.jikan.moe/v4/top/${selectValue.category}?page=2`
      )
      const data = await resp.json()
      const filtroGenero = data.data.filter((item) => {
        return item.genres[0].name === selectValue.genero
      })
      const filtroYears = filtroGenero.filter((year) => {
        return parseInt(year.aired.prop.to.year) === parseInt(selectValue.año)
      })
      const filtroLetters = filtroYears.filter((letter) => {
        return letter.title.toUpperCase().slice(0, 1) === selectValue.letra
      })
      console.log(filtroLetters)
    } catch (error) {
      console.erro('Ocurrio un error')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    filtroData()
  }
  const handleChange = (e) => {
    setSelectValue({ ...selectValue, [e.target.name]: e.target.value })
  }
  return (
    <div className="container">
      <section className="capitulos">
        <h1>Todos los animes</h1>
        <form className="form__select">
          <select
            name="category"
            onChange={handleChange}
            value={selectValue.category}
          >
            <option value="Categoria">Categoria</option>
            <option value="anime">Anime</option>
            <option value="manga">Manga</option>
          </select>
          <select
            name="genero"
            onChange={handleChange}
            value={selectValue.genero}
          >
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
          <select name="año" onChange={handleChange} value={selectValue.año}>
            <option>Año</option>
            {fetchData &&
              years.reverse().map((item) => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                )
              })}
          </select>
          <select
            name="letra"
            onChange={handleChange}
            value={selectValue.letra}
          >
            <option value="value">Letra</option>
            {alfabeto.map((letra) => {
              return (
                <option value={letra} key={letra}>
                  {letra}
                </option>
              )
            })}
          </select>
          <button type="submit" className="btn-outline" onClick={handleSubmit}>
            <i className="fa-solid fa-magnifying-glass icons"></i>
          </button>
        </form>
        <div className="grid grid__search">
          {isPending ? <Loader /> : <ItemTop fetchData={fetchData} />}
        </div>
      </section>
    </div>
  )
}
