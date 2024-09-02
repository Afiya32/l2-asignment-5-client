import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayOut from "../layout/MainLayOut";
import Contact from "../pages/Contact";
import About from "../pages/About";
import RoomPage from "../pages/RoomPage";
import ErrorPage from "../pages/ErrorPage";
import AuthPage from "../pages/AuthPage";
import RoomDetailsPage from "../pages/RoomDetailsPage";
import PrivateRoute from "./PrivateRoute";
import BookingPage from "../layout/BookingPage";
import UserDashBoard from "../layout/UserDashBoard";
import CheckOutPage from "../pages/userPages/CheckOutPage";
import MyBooking from "../pages/userPages/MyBooking";
import AdminDashBoard from "../layout/AdminDashBoard";
import RoomManagement from "../pages/AdminPages/RoomManagement";
import SlotManagement from "../pages/AdminPages/SlotManagement";
import BookingManagement from "../pages/AdminPages/BookingManagement";

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
            {path:'rooms/:roomId',
                element:(
                    <PrivateRoute>
                      <RoomDetailsPage />
                    </PrivateRoute>
                  ),
            },
            {
                path:'rooms',
                element: (
                    <PrivateRoute>
                      <RoomPage />
                    </PrivateRoute>
                  ),
            },{
                path:'booking/:roomId',
                element: (
                    <PrivateRoute>
                     <BookingPage/>
                    </PrivateRoute>
                  ),
            },
        ]
    },{
        path:'/register',
        element:<AuthPage/>
    },{
        path:'/user-dashboard',
        element:<UserDashBoard/>,
        children:[{
            path:'checkout',
            element:<CheckOutPage/>
        },{
            index:true,
            element:<MyBooking/>
        },{
            path:'my-booking',
            element:<MyBooking/>
        }]

    },{
        path:'/admin-dashboard',
        element:<AdminDashBoard/>,
        children:[{
            index:true,
            element:<RoomManagement/>,

        },{ path:'room-management',
            element:<RoomManagement/>,
        },{
            path:'slot-management',
            element:<SlotManagement/>
        },{
            path:'booking-management',
            element:<BookingManagement/>
        }]
    }
])