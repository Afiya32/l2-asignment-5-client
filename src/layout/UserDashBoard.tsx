
import {  NavLink, Outlet } from 'react-router-dom';
import { CiMenuBurger } from 'react-icons/ci';
import Footer from '../components/Footer';
import logo from "../assets/logo.png"


const UserDashBoard = () => {

 
  

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar for mobile devices */}
      <nav className="bg-gray-800 text-white p-4 md:hidden items-center">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-lg font-bold size-12 ">
            <img src={logo} alt="" />
          </div>
          {/* Nav Links */}
          <div className="space-x-4">
          <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "justify-center items-center text-xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent"
                    : "font-bold p-2"
                }
                to="/"
              >
                Home
              </NavLink>
          <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "justify-center items-center text-xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent"
                    : "font-bold p-2"
                }
                to="/user-dashboard/my-booking"
              >
                My-Booking
              </NavLink>
          <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "justify-center items-center text-xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent"
                    : "font-bold p-2"
                }
                to="/user-dashboard/checkout"
              >
                Check-Out
              </NavLink>
          
           
          </div>
        </div>
      </nav>

      {/* Icon Button for large devices */}
      <div className="hidden md:flex lg:flex items-center justify-end p-4  text-black">
      <div className='mr-[460px] flex justify-center items-center gap-1'>
        <div className='size-20'>
        <img src={logo} alt="" />
        </div>
        <div className='text-2xl  font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent'>
          <h1>ROOMY</h1>
        </div>
       </div>
        
        <button
         >
            <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn  drawer-button"><CiMenuBurger size={24} /></label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      {/* Sidebar content here */}
      <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "justify-center items-center text-xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent"
                    : "font-bold p-2"
                }
                to="/"
              >
                Home
              </NavLink>
          <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "justify-center items-center text-xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent"
                    : "font-bold p-2"
                }
                to="/user-dashboard/my-booking"
              >
                My-Booking
              </NavLink>
          <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "justify-center items-center text-xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent"
                    : "font-bold p-2"
                }
                to="/user-dashboard/checkout"
              >
                Check-Out
              </NavLink>
    </ul>
  </div>
</div>
          
        </button>
      
      </div>

      {/* Outlet for nested routes */}
      {/* here will be the drawer which will control by the button */}
      
      <main className="flex-grow p-4 ">
       <div className='flex justify-center items-center h-[75vh]'> <Outlet /></div>
       <Footer/>
      </main>
    </div>
  );
};

export default UserDashBoard;
