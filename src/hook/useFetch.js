import { useEffect, useState } from 'react'

export const useFetch = (url) => {
  const [fetchData, setFetchData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await fetch(url)
        const data = await resp.json()
        setFetchData(data)
      } catch (error) {
        console.error('Ocurrio un error')
      }
    }
    getData(url)
  }, [])
  return { fetchData }
}
