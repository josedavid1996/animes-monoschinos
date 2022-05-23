import React, { useState } from 'react'
import logo from '../../assets/logoanime.png'

export const Header = () => {
  const [isActiveNav, setIsActiveNav] = useState(true)

  const [isActiveSearch, setIsActiveSearch] = useState(true)

  const showMenu = () => setIsActiveNav((active) => !active)

  const showSearch = () => setIsActiveSearch((active) => !active)
  return (
    <>
      <div className="container">
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
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="/">Anime</a>
              </li>
              <li>
                <a href="/">Emision</a>
              </li>
              <li>
                <a href="/">Calendario</a>
              </li>
            </ul>
          </nav>
          <form
            className={
              isActiveSearch
                ? 'header__search'
                : 'header__search is-active-search'
            }
          >
            <div className="search__group">
              <input
                type="search"
                name="search"
                placeholder="Buscar anime..."
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
    </>
  )
}
