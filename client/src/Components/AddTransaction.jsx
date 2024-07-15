import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../features/userSlice';
import axios from 'axios';

function AddTransaction() {
  const [income, setIncome] = useState("");
  const [expense, setExpense] = useState("");
  const [edescription, seteDescription] = useState("");
  const [idescription, setiDescription] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const addIncomeAmount = async () => {
    const username = user.username;
    const incomeValue = parseFloat(income);
    const newUser = await axios.post('http://localhost:5000/users/addIncome', { income: incomeValue, idescription, username });
    dispatch(setUser(newUser.data));
    setIncome('');
    setiDescription('');
  };

  const addExpenseAmount = async () => {
    const username = user.username;
    const expenseValue = parseFloat(expense);
    const newUser = await axios.post('http://localhost:5000/users/addExpense', { expense: expenseValue, edescription, username });
    dispatch(setUser(newUser.data));
    setExpense('');
    seteDescription('');
  };

  return (
    <div className="bg-white max-w-2xl rounded-lg shadow p-8 mt-8 mx-auto">
      <div className="flex justify-between">
        <div className="bg-slate-100 p-6 rounded-lg shadow-md w-1/2 mr-4 hover:scale-110 transition ease-in-out">
          <h1 className="text-xl font-semibold mb-4">Add Income</h1>
          <input
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            type="number"
            placeholder="Amount"
            className="w-full p-2 mb-4 border rounded-lg"
          />
          <input
            value={idescription}
            onChange={(e) => setiDescription(e.target.value)}
            type="text"
            placeholder="Description"
            className="w-full p-2 mb-4 border rounded-lg"
          />
          <button
            onClick={addIncomeAmount}
            className="w-full p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Add Income
          </button>
        </div>
        <div className="bg-slate-100 p-6 rounded-lg shadow-md w-1/2 ml-4 hover:scale-110 transition ease-in-out">
          <h1 className="text-xl font-semibold mb-4">Add Expense</h1>
          <input
            value={expense}
            onChange={(e) => setExpense(e.target.value)}
            type="number"
            placeholder="Amount"
            className="w-full p-2 mb-4 border rounded-lg"
          />
          <input
            value={edescription}
            onChange={(e) => seteDescription(e.target.value)}
            type="text"
            placeholder="Description"
            className="w-full p-2 mb-4 border rounded-lg"
          />
          <button
            onClick={addExpenseAmount}
            className="w-full p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Add Expense
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTransaction;
