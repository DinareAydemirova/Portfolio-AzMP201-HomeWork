import { useEffect, useReducer, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Admin from "./Pages/Admin/Index";
import Post from "./Pages/Post/Index";
import Edit from "./Pages/Edit/Index";
import Layout from "./Layout/Navbar/Index";
import reducer from "./reducer/reducer";
import { getAllData } from "./services";
import { endPoints } from "./services/api";
import Users from "./Pages/users/Index";
import Login from "./Pages/login/Index";
import Register from "./Pages/register/Index";
import NoPage from "./Pages/noPage/Index";
import ProdDetail from "./Pages/detail/Index";
import Cards from "./Pages/cards/Cards";
import Basket from "./Pages/basket/Basket";
import Dashboard from "./Pages/Dashboard/İndex";

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

  const isLogin = false;
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
            <Route
              path="products"
              element={<Admin state={state} dispatch={dispatch} />}
            />
             <Route
              index
              element={<Dashboard state={state} dispatch={dispatch} />}
            />
            <Route path="/products/:id" Component={ProdDetail}/>
            <Route path="edit" element={<Edit />} />
            <Route path="post" element={<Post />} />
            <Route path="cards" element={<Cards/>}/>
            <Route path="basket" element={<Basket/>}/>
            <Route
              path="users"
              element={<Users state={state} dispatch={dispatch} />}
            />
            <Route path="noPage" element={<NoPage />} />
          </Route>
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
