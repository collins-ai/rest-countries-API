import { FaMoon } from "react-icons/fa"

const Header = () => {
  return (
    <header className="bg-gray-700 text-white flex justify-between items-center p-5 sticky top-0 shadow-sm shadow-gray-900 sm:px-15">
      <h1 className="text-lg font-bold sm:text-xl">Where in the world?</h1>
      <p className="text-sm flex items-center gap-2"><FaMoon /> Dark Mode</p>
    </header>
  )
}

export default Header