import Lottie from 'lottie-react';
import errorAnimation from "../assets/animation/errorpage.json"
import { Link } from 'react-router-dom';
const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Lottie animationData={errorAnimation} loop={true} className="w-80 h-80 mb-8" />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;