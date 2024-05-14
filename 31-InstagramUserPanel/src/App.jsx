import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './Pages/profile/Index'
import routes from './routes/Routes'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(routes);
function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
