import { createBrowserRouter, RouterProvider } from "react-router"
import HomePage from "./pages/homePage"
import DetailsPage from "./pages/detailsPage"

function App() {
  const router = createBrowserRouter([
    { path: `/`, element: <HomePage /> },
    { path: `/details`, element: <DetailsPage /> }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App