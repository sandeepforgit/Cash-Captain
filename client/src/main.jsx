import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/Store.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Transactions from './pages/Transactions.jsx'
import Statistics from './pages/Statistics.jsx'
import Layout from './Components/Layout.jsx'
import UserInfo from './pages/UserInfo.jsx'


const route = createBrowserRouter(
  
  createRoutesFromElements(
    <>
    <Route path="/" element={<Login />}/>
    <Route path="/Signup" element={<Signup />} />
    <Route element={<Layout />}>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/transactions" element={<Transactions />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/userinfo" element={<UserInfo />} />
    </Route>
    </>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
    <RouterProvider router={route} />
    </Provider>
    
  
)
