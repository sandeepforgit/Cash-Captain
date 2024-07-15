import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '../Components/Layout';
import { useEffect } from 'react';
import { initializeUser } from '../features/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AddTransaction from '../Components/AddTransaction';

const Dashboard = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(initializeUser());
  }, [dispatch]);

  return (
    <> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div><h1 class="font-bold text-3xl mb-10 ">Hello {user.username }!</h1></div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          <div className="bg-white overflow-hidden shadow rounded-lg hover:scale-110 transition ease-in-out">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Balance</h3>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="flex justify-between px-4 py-4 text-xl font-semibold">
                  <dt className="text-gray-500">Current Balance</dt>
                  <dd className="text-green-600">${user.balance}</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg hover:scale-110 transition ease-in-out">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Income</h3>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="flex justify-between px-4 py-4 text-xl font-semibold">
                  <dt className="text-gray-500">Total Income</dt>
                  <dd className="text-green-600">${user.income}</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg hover:scale-110 transition ease-in-out">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Expenses</h3>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="flex justify-between px-4 py-4 text-xl font-semibold">
                  <dt className="text-gray-500">Total Expenses</dt>
                  <dd className="text-red-600">${user.expense}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        
      </div>

      <AddTransaction />
    </>
  );
};

export default Dashboard;
