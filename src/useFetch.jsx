import { useEffect, useState } from "react"

const UseFetch = () => {
  const [countriesData, setCountriesData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await fetch(`/data.json`)
    const data = await response.json()
    setCountriesData(data)
  }

  return { countriesData }
}

export default UseFetch