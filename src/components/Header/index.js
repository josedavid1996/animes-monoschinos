import React, { useContext, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../../assets/logoanime.png'

import { AppContext } from '../Context'

export const Header = () => {
  // CONTEXT

  const { setSearchDataValue } = useContext(AppContext)
  ///
  const [isActiveNav, setIsActiveNav] = useState(true)
  const [isActiveSearch, setIsActiveSearch] = useState(true)
  const [searchValue, setSearchValue] = useState(null)
  const showMenu = () => setIsActiveNav((active) => !active)
  const showSearch = () => setIsActiveSearch((active) => !active)

  const onValueChange = (e) => {
    setSearchValue(e.target.value)
  }
  const handlesubmit = async (e) => {
    e.preventDefault()
    const resp = await fetch(
      `https://api.jikan.moe/v4/anime?q=${searchValue}&sfw`
    )
    const data = await resp.json()
    setSearchDataValue(data)
    setSearchValue(null)
  }

  return (
    <>
      <div className="container__header">
        <header className="header">
          <i className="fa-solid fa-bars icons" onClick={showMenu}></i>
          <figure className="header__logo">
            <img src={logo} alt="logo" />
          </figure>
          <nav
            className={
              isActiveNav ? 'header__nav' : 'header__nav is-active-nav'
            }
          >
            <ul className="nav__list">
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/anime">Anime</Link>
              </li>
              {/* <li>
                <Link to="/">Emision</Link>
              </li>
              <li>
                <Link to="/">Calendario</Link>
              </li> */}
            </ul>
          </nav>
          <form
            onSubmit={handlesubmit}
            // onKeyDown={handlekeyboard}
            className={
              isActiveSearch
                ? 'header__search'
                : 'header__search is-active-search'
            }
          >
            <div className="search__group">
              <input
                type="text"
                name="search"
                placeholder="Buscar anime..."
                onChange={onValueChange}
                // value={searchValue}
              />
              <i className="fa-solid fa-magnifying-glass "></i>
            </div>
          </form>
          <div className="header__group-btns">
            <button className={isActiveNav ? 'btn' : 'btn is-active-nav'}>
              Dramas
            </button>
            <button
              className={
                isActiveNav ? 'btn-outline' : 'btn-outline is-active-nav'
              }
            >
              Login
            </button>
          </div>
          <i
            className="fa-solid fa-magnifying-glass icons"
            onClick={showSearch}
          ></i>
        </header>
      </div>
      <Outlet />
    </>
  )
}
