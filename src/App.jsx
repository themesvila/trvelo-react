import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import NotFound from "./pages/NotFound"
import RootLayout from "./layout/root";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "*",
        element: <NotFound />
      },
    ]
  },

]);

function App() {

  return (
    <> 
      
      <RouterProvider router={router} />
      
    </>
  )
}

export default App
