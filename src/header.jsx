import { FaMoon } from "react-icons/fa"

const Header = () => {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle(`dark`)
  }

  return (
    <header className="bg-white text-gray-900 flex justify-between items-center p-5 sticky top-0 z-10 shadow-sm shadow-gray-200 sm:px-15 dark:bg-gray-700 dark:text-white dark:shadow-gray-900">
      <h1 className="text-lg font-bold sm:text-xl">Where in the world?</h1>
      <button onClick={toggleDarkMode} className="text-sm flex items-center gap-2 cursor-pointer"><FaMoon /> Dark Mode</button>
    </header>
  )
}

export default Header