import { FaMoon } from "react-icons/fa"

const Header = () => {
  return (
    <header className="bg-gray-700 text-white flex justify-between items-center p-5">
      <h1 className="font-bold">Where in the world?</h1>
      <p className="text-sm flex items-center gap-2"><FaMoon /> Dark Mode</p>
    </header>
  )
}

export default Header