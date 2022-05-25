import React, { useContext } from 'react'
import { Capitulos } from '../components/Capitulos'
import { AppContext } from '../components/Context'
import { Searches } from '../components/Searches'

export const Home = () => {
  const { searchDataValue } = useContext(AppContext)
  return <>{searchDataValue ? <Searches /> : <Capitulos />}</>
}
