import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayOut from "../layout/MainLayOut";
import Contact from "../pages/Contact";
import About from "../pages/About";
import RoomPage from "../pages/RoomPage";
import ErrorPage from "../pages/ErrorPage";

export const router= createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                index:true,
                element:<App/>
            },
            {
            path:'contact',
            element:<Contact/>
            },
            {
                path:'about',
                element:<About/>
            },
            {
                path:'room',
                element:<RoomPage/>
            }
        ]
    }
])