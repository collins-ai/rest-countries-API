import { useContext, useState } from "react"
import { Link } from "react-router"
import Header from "../header"
import { FaAngleDown, FaSearch } from "react-icons/fa"
import { countriesContext } from "../countriesContext"

const HomePage = () => {
  const [category, setCategory] = useState(`All`)
  const [search, setSearch] = useState(``)
  const { countriesData } = useContext(countriesContext)

  const regions = [...new Set(countriesData.map(item => item.region))]

  const filteredData = countriesData.filter(item => {
    const countryRegion = category === `All` || item.region === category
    const countryName = item.name.toLowerCase().includes(search.trim().toLowerCase())
    return countryRegion && countryName
  })

  return (
    <div>
      <Header />
      <main className="bg-gray-50 min-h-screen p-5 flex flex-col gap-10 sm:px-15 sm:py-10 dark:bg-gray-800">
        <div className="flex flex-col items-start gap-8 sm:flex-row sm:justify-between">
          <form className="bg-white text-gray-500 w-full rounded-md relative shadow-sm shadow-gray-200 sm:w-1/3 dark:bg-gray-700 dark:text-white dark:shadow-gray-900">
            <button type="submit" className="text-md absolute left-5 top-1/2 -translate-y-1/2 cursor-pointer">
              <FaSearch />
            </button>
            <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Seacrh for a country..." className="w-full text-sm ps-15 pe-5 py-3 outline-none placeholder:text-gray-400" />
          </form>
          <div className="bg-white text-gray-900 text-sm rounded-md relative shadow-sm shadow-gray-200 dark:shadow-gray-900">
            <label htmlFor="region" className="absolute right-3 top-1/2 -translate-y-1/2">
              <FaAngleDown />
            </label>
            <select id="region" value={category} onChange={(e) => setCategory(e.target.value)} className="bg-white ps-5 pe-20 py-3 appearance-none outline-none rounded-md dark:bg-gray-700">
              <option value="All" disabled hidden>Filter by Region</option>
              {regions.map(region => 
                <option key={region} value={region}>{region}</option>
              )}
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-10 px-5 sm:flex-row sm:flex-wrap sm:px-0 sm:gap-15">
          {filteredData.map(item => 
            <Link to={`/details/${item.name}`} key={item.name} className="bg-white text-gray-900 rounded-md shadow-sm shadow-gray-200 sm:smcard lg:lgcard dark:bg-gray-700 dark:text-white dark:shadow-gray-900">
              <img src={item.flag} alt={item.name} className="w-full h-50 object-cover rounded-t-md" />
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