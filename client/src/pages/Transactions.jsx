import React, { useEffect } from 'react'
import TransactionList from '../Components/TransactionList'
import { useDispatch } from 'react-redux';
import { initializeUser } from '../features/userSlice';

function Transactions() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeUser());
      }, [dispatch]);
    return (
  
      <TransactionList />
     
  )
}

export default Transactions