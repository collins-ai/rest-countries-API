import { createContext, useEffect, useState } from "react"

export const countriesContext = createContext()

const CountriesProvider = ({ children }) => {
  const [countriesData, setCountriesData] = useState([])
  
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await fetch(`/data.json`)
    const data = await response.json()
    setCountriesData(data)
  }

  return (
    <countriesContext.Provider value={{ countriesData, setCountriesData }}>
      { children }
    </countriesContext.Provider>
  )
}

export default CountriesProvider