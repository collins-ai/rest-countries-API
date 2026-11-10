import { useContext, useEffect, useState } from "react"
import Header from "../header"
import { FaAngleDown, FaSearch } from "react-icons/fa"
import { Link } from "react-router"
import { countriesContext } from "../countriesContext"

const HomePage = () => {
  const [category, setCategory] = useState(``)
  const { countriesData } = useContext(countriesContext)

  const regions = [...new Set(countriesData.map(item => item.region))]

  const handleSearch = (e) => {
    e.preventDefault()
    alert(`qwert`)
  }

  return (
    <div>
      <Header />
      <main className="bg-gray-800 min-h-screen p-5 flex flex-col gap-10 sm:px-15 sm:py-10">
        <div className="flex flex-col items-start gap-8 sm:flex-row sm:justify-between">
          <form onSubmit={handleSearch} className="bg-gray-700 text-white w-full rounded-md relative sm:w-1/3">
            <button type="submit" className="text-md absolute left-5 top-1/2 -translate-y-1/2 cursor-pointer">
              <FaSearch />
            </button>
            <input type="search" name="" id="" placeholder="Seacrh for a country..." className="w-full text-sm ps-15 pe-5 py-3 outline-none" />
          </form>
          <div className="bg-gray-700 text-white text-sm rounded-md relative">
            <label htmlFor="region" className="absolute right-3 top-1/2 -translate-y-1/2">
              <FaAngleDown />
            </label>
            <select id="region" value={category} onChange={(e) => setCategory(e.target.value)} className="bg-gray-700 ps-5 pe-20 py-3 appearance-none outline-none rounded-md">
              <option value="" disabled hidden>Filter by Region</option>
              {regions.map(region => 
                <option key={region} value={region}>{region}</option>
              )}
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-10 px-5 sm:flex-row sm:flex-wrap sm:px-0 sm:gap-15">
          {countriesData.map(item => 
            <Link to={`/details/${item.name}`} key={item.name} className="bg-gray-700 text-white rounded-md card">
              <img src={`/ax.svg`} alt={item.name} className="rounded-t-md" />
              <div className="p-5 pb-10">
                <h2 className="text-lg font-bold mb-3">{item.name}</h2>
                <p>Population: <span className="text-gray-400">{item.population}</span></p>
                <p>Region: <span className="text-gray-400">{item.region}</span></p>
                <p>Capital: <span className="text-gray-400">{item.capital}</span></p>
              </div>
            </Link>
          )}
        </div>
      </main>
    </div>
  )
}

export default HomePage