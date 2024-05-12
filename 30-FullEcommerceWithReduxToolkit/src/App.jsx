import { useEffect, useReducer, useState } from "react";
import "./App.css";
import routes from "./routes/routes";
import { getAllData } from "./services";
import { endPoints } from "./services/api";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProducts } from "./redux/slices/mainSlice";

const router = createBrowserRouter(routes);

function App() {
const dispatch=useDispatch()


  useEffect(() => {
    getAllData(endPoints.products).then((data) => {
     dispatch(setProducts(data))
    //  console.log(data);
    });
  }, []);

  return (
    <>
    <RouterProvider router={router} />

       
    </>
    
  );
}

export default App;
