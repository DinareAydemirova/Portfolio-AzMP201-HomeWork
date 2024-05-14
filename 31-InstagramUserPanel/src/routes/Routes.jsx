import Header from "../Layout/Header/Header";
import Profile from "../Pages/profile/Index";
import Home from "../Pages/Home/Index";
import Login from "../Pages/Login/Index";
import Register from "../Pages/Register/Register";

const routes = [
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/",
        element: <Home />,
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
