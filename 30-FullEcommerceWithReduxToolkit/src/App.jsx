import { useEffect, useReducer, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import routes from "./routes/routes";
import Admin from "./Pages/Admin/Index";
import Post from "./Pages/Post/Index";
import Edit from "./Pages/Edit/Index";
import reducer from "./reducer/reducer";
import { getAllData } from "./services";
import { endPoints } from "./services/api";
import Users from "./Pages/users/Index";
import Login from "./Pages/login/Index";
import Register from "./Pages/register/Index";
import NoPage from "./Pages/noPage/Index";
import ProdDetail from "./Pages/detail/Index";
import Dashboard from "./Pages/Dashboard/İndex";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Navbar/Index";

const router = createBrowserRouter(routes);

function App() {
  const [state, dispatch] = useReducer(reducer, {
    products: [],
    filteredProd: [],
    users: [],
  });
  useEffect(() => {
    getAllData(endPoints.products).then((data) => {
      dispatch({
        type: "SetProducts",
        products: data,
      });
      // console.log(state.products);
    });
  }, []);

  return (
    <>
    <RouterProvider router={router}/>

       {/* <BrowserRouter>
         <Routes>
     
            <Route
              path="admin"
              element={<Admin state={state} dispatch={dispatch} />}
            />

             <Route
              index
              element={<Dashboard state={state} dispatch={dispatch} />}
            />
            <Route path="/products/:id" Component={ProdDetail}/>
            <Route path="edit" element={<Edit />} />
            <Route path="post" element={<Post />} />
    

            <Route
              path="users"
              element={<Users state={state} dispatch={dispatch} />}
            />
            <Route path="noPage" element={<NoPage />} />
          </Routes>
    

       
       </BrowserRouter> */}
    </>
    
  );
}

export default App;
