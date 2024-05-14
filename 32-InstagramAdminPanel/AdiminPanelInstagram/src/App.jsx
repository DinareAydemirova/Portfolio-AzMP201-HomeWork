import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes/Router";


function App() {
  const router = createBrowserRouter(routes);

  return(
    <RouterProvider router={router} />
  )
}

export default App;
