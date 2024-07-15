
import React from 'react';
import { useSelector } from 'react-redux';

const TransactionList = () => {
    const transactions = useSelector((state) => state.user.user.transactions);

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Transactions</h1>
      <ul className="space-y-4">
        {transactions.map((transaction, index) => (
          <li
            key={index}
            className={`hover:scale-110 transition ease-in-out p-4 rounded shadow-md ${
              transaction.type === 'income' ? 'bg-green-100' : 'bg-red-100'
            }`}
          >
            <div className="flex justify-between items-center">
                    <div>
                <p className="text-lg font-semibold">{transaction.Description}</p>
                <p className="text-sm text-gray-600">{new Date(transaction.date).toLocaleString()}</p>
              </div>
              <p className={`text-lg font-bold ${
                transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
              }`}>
                {transaction.type === 'income' ? '+' : '-'}${transaction.type === 'income'?transaction.income:transaction.expense}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default TransactionList;
