import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import HandleLogout from '../features/HandleLogout';

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64 bg-white shadow-md transition-transform duration-200 ease-in-out`}>
        <div className="p-4 bg-blue-600 text-white font-bold text-2xl flex justify-between items-center">
          <span>Cash Captain</span>
          <button onClick={toggleSidebar} className="text-white">
            <FaTimes />
          </button>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <Link to="/" className="block text-gray-700 hover:bg-gray-200 rounded-md p-2 transition duration-200">Home</Link>
            </li>
            <li>
              <Link to="/dashboard" className="block text-gray-700 hover:bg-gray-200 rounded-md p-2 transition duration-200">Dashboard</Link>
            </li>
            <li>
              <Link to="/transactions" className="block text-gray-700 hover:bg-gray-200 rounded-md p-2 transition duration-200">Transactions</Link>
            </li>
            <li>
              <Link to="/statistics" className="block text-gray-700 hover:bg-gray-200 rounded-md p-2 transition duration-200">Statistics</Link>
            </li>
            <li>
              <Link to="/userinfo" className="block text-gray-700 hover:bg-gray-200 rounded-md p-2 transition duration-200">User Profile</Link>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-200">
          <button onClick={HandleLogout()} className="w-full text-white bg-blue-600 hover:bg-blue-700 rounded-md py-2 transition duration-200">Logout</button>
        </div>
      </aside>
      
      {/* Main Content */}
      <div className={`flex-1 p-8 transition-all duration-200 ease-in-out ${isOpen ? 'ml-64' : 'ml-0'}`}>
        <button onClick={toggleSidebar} className="text-blue-600 hover:text-blue-800 mb-4">
          <FaBars />
        </button>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
