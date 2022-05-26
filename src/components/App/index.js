import { AppUi } from './AppUi'
import '../../style.css'
import { AppContext } from '../Context'
import { useState } from 'react'

function App() {
  const [isPendingSearch, setIsPendingSearch] = useState(true)
  const [searchDataValue, setSearchDataValue] = useState(null)
  const [isActiveNav, setIsActiveNav] = useState('header__nav')
  const [isActiveSearch, setIsActiveSearch] = useState(['header__search'])
  const [searchValue, setSearchValue] = useState('')
  const [fetchData, setFetchData] = useState(null)
  const showMenu = () => setIsActiveNav((active) => !active)
  const showSearch = () => setIsActiveSearch((active) => !active)
  return (
    <AppContext.Provider
      value={{
        searchDataValue,
        setSearchDataValue,
        isActiveNav,
        setIsActiveNav,
        isActiveSearch,
        setIsActiveSearch,
        searchValue,
        setSearchValue,
        showMenu,
        showSearch,
        isPendingSearch,
        setIsPendingSearch,
        fetchData,
        setFetchData
      }}
    >
      <AppUi />
    </AppContext.Provider>
  )
}

export default App
