
import Layout from "../Layout/Navbar/Index";
import Admin from "../Pages/Admin/Index";
import Cards from "../Pages/cards/Cards";
import Wishlist from "../Pages/wishlist/Wishlist";
import Basket from "../Pages/basket/Basket";
import Login from "../Pages/login/Index";
import Register from "../Pages/register/Index";
import Dashboard from "../Pages/Dashboard/İndex";
import Post from "../Pages/Post/Index";
import Users from "../Pages/users/Index";
import NoPage from "../Pages/noPage/Index";
import ProdDetail from "../Pages/detail/Index";

const isLogin = true;


const routes = [
 

  {
    path: "/",
    element:isLogin? <Layout />:<Login/>,
    children: [
      {
        path: "/cards",
        element: <Cards />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path:"/admin",
        element:<Admin />,
       
        
       },
       {
         path:"/users",
         element:<Users/>
       },
        {
           path:"/post",
           element:<Post/>
         },
         {
          path:"/nopage",
          element:<NoPage/>
        },
        {
          path:"/admin",
          element: <Admin/>
      
        },
        {
          path:"/products/:id",
          element: < ProdDetail/>
      
        },
        {
          path:"/",
          element: <Dashboard/>
      
        },
    
    ],
  },
 
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register />,
  },
];

export default routes;
