import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import HandleLogout from '../features/HandleLogout';
import { initializeUser } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';
function UserInfo() {
    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(() => {
        dispatch(initializeUser());
    }, [dispatch]);
    

  return (
    <div className="bg-white overflow-hidden shadow w-96 rounded-lg mt-8 ml-52 hover:scale-110 transition ease-in-out">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">User Info</h3>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="flex justify-between px-4 py-4">
                <dt className="text-sm font-medium text-gray-500">Name</dt>
                <dd className="text-sm">{user.username}</dd>
              </div>
              <div className="flex justify-between px-4 py-4">
                <dt className="text-sm font-medium text-gray-500">Email</dt>
                <dd className="text-sm">{user.email}</dd>
          </div>
          <div className="flex justify-between px-4 py-4">
                <dt className="text-sm font-medium text-gray-500">Net Worth</dt>
            <dd className="text-sm">{"$"}{user.balance}</dd>
              </div>
            </dl>
            <div className="px-4 py-4">
              <button onClick={HandleLogout()} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">Logout</button>
            </div>
          </div>
        </div>
  )
}


export default UserInfo