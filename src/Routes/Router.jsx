import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";
import Chefs from "../component/chefs/Chefs";
import ChefRecipies from "../component/chefs/ChefRecipies";
import Chef from "../component/chefs/Chef";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "./ErrorPage";
import Blog from "../component/Blog/Blog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://digital-chef-server-4ait460bu-abu-hosains-projects.vercel.app/chefs')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element :<Register></Register>
            },
            {
                path: '/chefs',
                element: <Chefs></Chefs>,
            },
            {
                path: '/chef',
                element: <Chef></Chef>
            },
            {
                path:'/chefs/:id',
                element: <PrivateRoute><ChefRecipies></ChefRecipies></PrivateRoute>,
                loader: ({params}) => fetch(`https://digital-chef-server-4ait460bu-abu-hosains-projects.vercel.app/chefs/${params.id}`)

            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
]);

export default router