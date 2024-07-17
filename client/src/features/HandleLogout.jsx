import { useDispatch } from "react-redux";
import { logoutUser } from "./userSlice";
import { useNavigate } from "react-router-dom";
import React from 'react'

function HandleLogout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(logoutUser());
        navigate('/login');
    }
    
  return (
    handleLogout
  )
}

export default HandleLogout
  