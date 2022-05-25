import React, { useContext } from 'react'
import { Capitulos } from '../components/Capitulos'
import { AppContext } from '../components/Context'
import { Search } from '../components/Search'

export const Home = () => {
  const { searchDataValue } = useContext(AppContext)
  return <>{searchDataValue ? <Search /> : <Capitulos />}</>
}
