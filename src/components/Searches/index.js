import React, { useContext } from 'react'
import { AppContext } from '../Context'
import { Loader } from '../Loader'
import { Search } from './Search'

export const Searches = () => {
  const { isPendingSearch, searchDataValue } = useContext(AppContext)

  return (
    <div className="container">
      <section className="capitulos busquda">
        <h1>Resultados de la búsqueda</h1>
        <div className="grid">
          {isPendingSearch ? (
            <Loader />
          ) : (
            <Search searchDataValue={searchDataValue} />
          )}
        </div>
      </section>
    </div>
  )
}
