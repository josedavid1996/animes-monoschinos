import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../../assets/logoanime.png'

import { AppContext } from '../Context'
import { Footer } from '../Footer'

export const Header = () => {
  // CONTEXT

  const {
    setSearchDataValue,
    setSearchValue,
    searchValue,
    setIsActiveNav,
    setIsActiveSearch,
    isActiveNav,
    isActiveSearch,
    setIsPendingSearch
  } = useContext(AppContext)

  const searchToggle = () => {
    isActiveSearch === 'header__search'
      ? setIsActiveSearch('header__search is-active-search')
      : setIsActiveSearch('header__search')
  }

  const navToggle = () => {
    // PREGUNTAR
    if (isActiveNav === 'header__nav') {
      setIsActiveNav('header__nav is-active-nav')
      document.querySelector('.btn').classList.add('is-active-nav')
      document.querySelector('.btn-outline').classList.add('is-active-nav')
    } else {
      setIsActiveNav('header__nav')
      document.querySelector('.btn').classList.remove('is-active-nav')
      document.querySelector('.btn-outline').classList.remove('is-active-nav')
    }
  }

  const onValueChange = (e) => {
    setSearchValue(e.target.value)
  }
  const handlesubmit = async (e) => {
    e.preventDefault()
    if (searchValue.length === 0) {
      alert('Tienes que poner un nombre de anime')
      return
    }
    try {
      const resp = await fetch(
        `https://api.jikan.moe/v4/anime?q=${searchValue}&sfw`
      )
      const data = await resp.json()
      setSearchDataValue(data)
      setIsPendingSearch(false)
      setSearchValue('')
      setIsActiveSearch('header__search')
    } catch (error) {
      console.error('Ocurrio un error')
    }
  }
  const resetHome = () => {
    setSearchDataValue(null)
    setIsPendingSearch(true)
  }

  return (
    <>
      <div className="container__header">
        <header className="header">
          <i className="fa-solid fa-bars icons" onClick={navToggle}></i>
          <figure className="header__logo" onClick={resetHome}>
            <img src={logo} alt="logo" />
          </figure>
          <nav className={isActiveNav}>
            <ul className="nav__list">
              <li>
                <Link to="/" onClick={resetHome}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/anime">Anime</Link>
              </li>
            </ul>
          </nav>
          <form onSubmit={handlesubmit} className={isActiveSearch}>
            <div className="search__group">
              <input
                type="text"
                name="search"
                placeholder="Buscar anime..."
                onChange={onValueChange}
                value={searchValue}
                autoComplete="off"
              />
              <i className="fa-solid fa-magnifying-glass "></i>
            </div>
          </form>
          <div className="header__group-btns">
            <button className="btn">Dramas</button>
            <button className="btn-outline">Login</button>
          </div>
          <i
            className="fa-solid fa-magnifying-glass icons"
            onClick={searchToggle}
          ></i>
        </header>
      </div>
      <Outlet />
      <Footer />
    </>
  )
}
