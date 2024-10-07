import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { initializeUser } from "../features/userSlice";
import HandleLogout from "../features/HandleLogout";


const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate;
  useEffect(() => {
    dispatch(initializeUser());
  }, []);

  const user = useSelector((state) => state.user.user);
  let lin;
  if (user.isAuthenticated == true) lin = "/dashboard";
  else lin = "/login";
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 font-roboto">
      <nav className="bg-blue-600 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">Cash Captain</h1>
          {user.isAuthenticated && (
            <div className="flex items-center space-x-4">
              <Link
                to="/dashboard"
                className="text-white px-4 py-2 rounded-md bg-blue-800 hover:bg-blue-700 transition duration-300"
              >
                Dashboard
              </Link>
              <button
                onClick={HandleLogout()}
                className="text-white px-4 py-2 rounded-md bg-red-600 hover:bg-red-500 transition duration-300"
              >
                Logout
              </button>
            </div>
          )}
          {!user.isAuthenticated && (
            <div>
              <Link
                to="/login"
                className="text-white px-4 py-2 rounded-md bg-blue-800 hover:bg-blue-700 transition duration-300"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-blue-600 px-4 py-2 rounded-md bg-white ml-4 hover:bg-gray-200 transition duration-300"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </nav>

      <div className="container mx-auto flex-grow flex flex-col justify-center items-center text-center p-6">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">
          Take Control of Your Finances
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          "A budget is telling your money where to go instead of wondering where
          it went." - Dave Ramsey
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <Link
            to={lin}
            className="text-white px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-500 transition duration-300 text-lg"
          >
            Get Started
          </Link>
          { !user.isAuthenticated &&  <Link
            to="/signup"
            className="text-blue-600 px-6 py-3 rounded-md bg-white border border-blue-600 hover:bg-gray-100 transition duration-300 text-lg"
          >
            Create Account
          </Link>}
        </div>
      </div>

      <footer className="bg-gray-800 p-4">
        <div className="container mx-auto text-center text-white">
          <p>&copy; 2024 Cash Captain. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
