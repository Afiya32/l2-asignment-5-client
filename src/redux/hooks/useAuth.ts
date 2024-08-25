import { getCookie } from "../../utilis/cookies";

export const useAuth = () => {
    // Retrieve user and token from cookies
    const cookieUser = getCookie('user');
    const cookieToken = getCookie('token');
  
    // Parse user from cookie if available
    const user = cookieUser ? JSON.parse(cookieUser) : null;
    const token = cookieToken || '';
  
    // Check authentication status
    const isAuthenticated = !!token;
  
    return {
      user,
      token,
      isAuthenticated,
    };
  };