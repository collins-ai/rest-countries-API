import { createBrowserRouter, RouterProvider } from "react-router"
import HomePage from "./pages/homePage"
import DetailsPage from "./pages/detailsPage"
import CountriesProvider from "./countriesContext"

function App() {
  const router = createBrowserRouter([
    { path: `/`, element: <HomePage /> },
    { path: `/details/:name`, element: <DetailsPage /> }
  ])

  return (
    <CountriesProvider>
      <RouterProvider router={router} />
    </CountriesProvider>
  )
}

export default App