import Navbar from "../Layout/Navbar";
import Users from "../pages/Users";
import UserDetail from "../pages/UserDetail";
import UserEdit from "../pages/UserEdit";
import CreateUser from "../pages/CreateUser";
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
      {
        path: "/createUser",
        element: <CreateUser />,
      },
    ],
  },
];
export default routes;
