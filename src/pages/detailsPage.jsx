import { Link, useParams } from "react-router"
import { useContext, useEffect, useState } from "react"
import Header from "../header"
import UseFetch from "../useFetch"
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
      <main className="bg-gray-800 min-h-screen px-5 py-10 flex flex-col items-start gap-15 sm:p-15">
        <Link to={`/`} className="bg-gray-700 flex items-center gap-2 px-5 py-1 rounded-md border-2 border-gray-900">
          <BiArrowBack className="text-white text-xl" />
          <span className="text-gray-400 text-lg">Back</span>
        </Link>
        <div className="flex flex-col gap-10 sm:flex-row sm:gap-20">
          <img src={`/ax.svg`} alt={item?.name} />
          <div className="text-white flex flex-col gap-5">
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
                  <span key={border} className="bg-gray-700 text-gray-400 text-center w-27 py-1 rounded-md">{border}</span>
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