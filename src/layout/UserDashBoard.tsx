import { NavLink, Outlet } from "react-router-dom";

const UserDashBoard = () => {
  return (
    <div className="grid grid-cols-2  h-[100vh]">
    <div className="w-2/6 bg-blue-600 text-center grid grid-cols-1">
     <NavLink to='/'  className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent"
                    : "font-bold p-2"
                } >Home</NavLink>  
      <NavLink to='/user-dashboard/my-booking' className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent"
                    : "font-bold p-2"
                }>Mybooking</NavLink>   
      <NavLink to='/user-dashboard/checkout' className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent"
                    : "font-bold p-2"
                }>CheckOut</NavLink>   
    </div>
    <div className="w-4/6 ">
    <Outlet/>
    </div>
    </div>
  );
};

export default UserDashBoard;