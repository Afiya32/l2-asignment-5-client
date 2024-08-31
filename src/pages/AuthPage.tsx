// Auth page
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import logo from '../assets/logo.png';
import { useLoginUserMutation, useSignUpUserMutation } from '../redux/api/api';
import { setCredentials } from '../redux/features/authSlice';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [signUpUser] = useSignUpUserMutation();
  const [loginUser] = useLoginUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleAuthMode = () => {
    setIsSignup(!isSignup);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const userData = Object.fromEntries(formData.entries());
  

    try {
      const result = await signUpUser(userData).unwrap();
      dispatch(setCredentials({ user: result.data, token: result.token }));
      Swal.fire({
        title: 'Success!',
        text: 'Account created successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        navigate('/'); // Redirect to the desired page
      });
    } catch (error ) {
      if (error instanceof Error) {
        Swal.fire({
          title: 'Error!',
          text: error.message || 'Login failed',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'An unexpected error occurred',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const credentials = Object.fromEntries(formData.entries());

    try {
      const result = await loginUser(credentials).unwrap();
      dispatch(setCredentials({ user: result.data, token: result.token }));
      Swal.fire({
        title: 'Success!',
        text: 'Logged in successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        navigate('/'); // Redirect to the desired page
      });
    } catch (error) {
      if (error instanceof Error) {
        Swal.fire({
          title: 'Error!',
          text: error.message || 'Login failed',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'An unexpected error occurred',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-stone-300">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center mb-6">
          <div className="mx-2 flex px-2">
            <img className="size-6" src={logo} alt="logo" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">
              ROOMY
            </h1>
          </div>
          <div className="flex items-center">
            <span className={`mr-2 text-base ${isSignup ? 'font-normal' : 'font-bold'}`}>Login</span>
            <label className="flex items-center cursor-pointer">
              <input type="checkbox" className="toggle toggle-lg" checked={isSignup} onChange={toggleAuthMode} />
            </label>
            <span className={`ml-2 text-lg ${isSignup ? 'font-bold' : 'font-normal'}`}>Sign Up</span>
          </div>
        </div>

        {isSignup ? (
          <form onSubmit={handleSignup}>
            <h1 className="mt-2">Already have an account? Please log in</h1>
            <div className="mb-4 mt-2">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input name="name" type="text" className="input input-bordered w-full" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">PhotoUrl</label>
              <input name="photoUrl" type="text" className="input input-bordered w-full" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input name="email" type="email" className="input input-bordered w-full" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input name="address" type="text" className="input input-bordered w-full" />
            </div>
            <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Role</label>
      <select name="role" className="input input-bordered w-full">
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
    </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input name="password" type="password" className="input input-bordered w-full" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input name="phone" type="text" className="input input-bordered w-full" />
            </div>
            <button type="submit" className="btn btn-primary w-full">Sign Up</button>
          </form>
        ) : (
          <form onSubmit={handleLogin}>
            <h1 className="mt-2">New here? Please Sign Up</h1>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input name="email" type="email" className="input input-bordered w-full" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input name="password" type="password" className="input input-bordered w-full" />
            </div>
            <button type="submit" className="btn btn-primary w-full">Login</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
