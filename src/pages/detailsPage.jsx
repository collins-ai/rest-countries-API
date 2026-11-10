import { Link, useParams } from "react-router"
import { useContext } from "react"
import Header from "../header"
import { countriesContext } from "../countriesContext"
import { BiArrowBack } from "react-icons/bi"

const DetailsPage = () => {
  const param = useParams()
  const { countriesData } = useContext(countriesContext)

  const item = countriesData.find(data => data.name === param.name)
  window.scrollTo(0, 0)

  return (
    <div>
      <Header />
      <main className="bg-white min-h-screen px-5 py-10 flex flex-col items-start gap-15 sm:p-15 dark:bg-gray-800">
        <Link to={`/`} className="bg-white flex items-center gap-2 px-5 py-1 rounded-md border-2 border-gray-300 dark:bg-gray-700 dark:border-gray-900">
          <BiArrowBack className="text-gray-900 text-xl dark:text-white" />
          <span className="text-gray-700 text-lg dark:text-gray-400">Back</span>
        </Link>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-20">
          <img src={item?.flag} alt={item?.name} className="lg:w-1/2 lg:h-100" />
          <div className="text-gray-900 flex flex-col gap-5 dark:text-white">
            <p className="text-lg font-bold">{item?.name}</p>
            <div className="flex flex-col gap-10 mb-3 sm:flex-row sm:gap-20 sm:mb-10">
              <div className="flex flex-col gap-1">
                <p>Native Name: <span className="text-gray-400">{item?.nativeName}</span></p>
                <p>Population: <span className="text-gray-400">{item?.population}</span></p>
                <p>Region: <span className="text-gray-400">{item?.region}</span></p>
                <p>Sub Region: <span className="text-gray-400">{item?.subregion}</span></p>
                <p>Capital: <span className="text-gray-400">{item?.capital}</span></p>
              </div>
              <div className="flex flex-col gap-1">
                <p>Top Level Domain: <span className="text-gray-400">{item?.topLevelDomain}</span></p>
                <p>Currencies: <span className="text-gray-400">{item?.currencies?.map(currency => currency.name)}</span></p>
                <p>Languages: <span className="text-gray-400">{item?.languages?.map(language => language.name)}</span></p>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <p className="text-lg">Border Countries:</p>
              <div className="flex flex-wrap gap-3">
                {item?.borders?.map(border => 
                  <button key={border} className="bg-white text-gray-700 text-center w-27 py-1 rounded-md border-2 border-gray-300 cursor-pointer dark:bg-gray-700 dark:text-gray-400 dark:border-gray-900">{border}</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DetailsPage