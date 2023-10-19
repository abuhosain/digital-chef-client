import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";
import Chefs from "../component/chefs/Chefs";
import ChefRecipies from "../component/chefs/ChefRecipies";
import Chef from "../component/chefs/Chef";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:3000/chefs')
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
                element: <ChefRecipies></ChefRecipies>,
                loader: ({params}) => fetch(`http://localhost:3000/chefs/${params.id}`)

            }
        ]
    }
]);

export default router