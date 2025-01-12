import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from "./pages/Home"
import About from "./pages/About"


const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
 
]);

function App() {

  return (
    <> 
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App
