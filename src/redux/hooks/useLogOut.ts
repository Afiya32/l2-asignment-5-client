import { useDispatch } from "react-redux";
import { logout } from "../features/authSlice";




export const useLogout = () => {
    const dispatch = useDispatch();
  
    const handleLogout = () => {
      dispatch(logout());
    };
  
    return { handleLogout };
  };