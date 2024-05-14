import { Children } from "react";
import Navbar from "../Layout/Navbar";
import Users from "../pages/Users";
import UserDetail from "../pages/UserDetail";
import UserEdit from "../pages/UserEdit";
const routes = [
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/users/:id",
        element: <UserDetail />,
      },
      {
        path: "/edit",
        element: <UserEdit />,
      },
    ],
  },
];
export default routes;
