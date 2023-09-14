import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import StoriesPage from "../Pages/StoriesPage/StoriesPage";
import About from "../Pages/About/About";
import Memories from "../Pages/Memories/Memories";
import Resources from "../Pages/Resources/Resources";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/stories",
        element: <StoriesPage></StoriesPage>,
      },
      {
        path: "/memories",
        element: <Memories></Memories>,
      },
      {
        path: "/resources",
        element: <Resources></Resources>,
      },
      {
        path: "/about",
        element: <About></About>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
export default router;
