import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { useAuth } from "../redux/hooks/useAuth";
import { useLogout } from "../redux/hooks/useLogOut";
import { FaPerson } from "react-icons/fa6";

const MainLayOut = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user } = useAuth();
  const { handleLogout } = useLogout();
  const navigate=useNavigate()
  const handLogout = () => {
    handleLogout();
   
    navigate('/')
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div
          className={`navbar sticky top-0 z-50 w-full transition-all duration-300 ease-in-out ${
            isScrolled
              ? "bg-transparent backdrop-blur-md"
              : "bg-slate-500 shadow-md"
          }`}
        >
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2">
            <img className="size-12" src={logo} alt="logo" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">
              ROOMY
            </h1>
          </div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
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
                    ? "text-xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent"
                    : "font-bold p-2"
                }
                to="/about"
              >
                About Us
              </NavLink>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent"
                    : "font-bold p-2"
                }
                to="/contact"
              >
                Contact Us
              </NavLink>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent"
                    : "font-bold p-2"
                }
                to="/rooms"
              >
                Meeting Rooms
              </NavLink>
              {user?.name ? (
               
                 <div className="dropdown dropdown-end items-center text-center">
                  <div tabIndex={0} role="button" className="btn m-1 rounded-full">
                    <FaPerson />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                  >
                    {user?.role === "admin" ? (
                      <NavLink className="btn btn-outline bg-green-300" to="/admin-dashboard">Dashboard</NavLink>
                     
                    ) : (
                      <NavLink to="/user-dashboard/my-booking" className="btn btn-outline bg-green-300">My booking</NavLink>
                    )}
                    <button className="btn btn-error mt-2 btn-outline" onClick={handLogout}>log out</button>
                  </ul>
                </div>
             
              ) : (
                <NavLink to='/register' className="btn btn-outline btn-primary mt-2">Sign up</NavLink>
              )}
            </ul>
          </div>
        </div>
        {/* Page content here */}
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu bg-base-200 min-h-full w-80 p-4 text-center mt-5">
          <li>
            <div className="mx-2 ml-8 flex-1 px-2 size-60"></div>
          </li>
          {/* Sidebar content here */}
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent"
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
                ? "text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent"
                : "font-bold p-2"
            }
            to="/about"
          >
            About Us
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent"
                : "font-bold p-2"
            }
            to="/contact"
          >
            Contact Us
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent"
                : "font-bold p-2"
            }
            to="/rooms"
          >
            Meeting Rooms
          </NavLink>
          {user?.name ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn m-1 rounded-full">
                <FaPerson />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                {user?.role === "admin" ? (
                  <NavLink className="btn btn-outline bg-green-300" to="/admin-dashboard">Dashboard</NavLink>
                ) : (
                      <NavLink to="/user-dashboard/my-booking" className="btn btn-outline bg-green-300">My booking</NavLink>
                    )}
                    <button className="btn btn-error mt-2 btn-outline" onClick={handLogout}>log out</button>
              </ul>
            </div>
          ) : (
            <NavLink to='/register' className="btn btn-outline">Sign up</NavLink>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MainLayOut;
