import { AppUi } from './AppUi'
import '../../style.css'
import { AppContext } from '../Context'
import { useState } from 'react'

function App() {
  const [searchDataValue, setSearchDataValue] = useState('')
  return (
    <AppContext.Provider value={{ searchDataValue, setSearchDataValue }}>
      <AppUi />
    </AppContext.Provider>
  )
}

export default App
