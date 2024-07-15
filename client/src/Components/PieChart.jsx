import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Pie } from 'react-chartjs-2';
import { nanoid } from '@reduxjs/toolkit';
import { initializeUser } from '../features/userSlice';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    Title,
    SubTitle,
} from 'chart.js';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    Title,
    SubTitle
);



const PieChart = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeUser());
    }, [dispatch]);
    
    const user = useSelector((state) => state.user.user);



    const income = user.income;
    const expense = user.expense;
    const total = income + expense;
    const incomePercentage = total === 0 ? 0 : ((income / total) * 100).toFixed(2);
    const expensePercentage = total === 0 ? 0 : ((expense / total) * 100).toFixed(2);

    const data = {
        labels: ['Income', 'Expense'],
        datasets: [
            {
                data: [incomePercentage, expensePercentage],
                backgroundColor: ['#68D391', '#FC8181'],
                hoverBackgroundColor: ['#4A9C75', '#F56565'],
            },
        ],
    };



    return (
        <div className="max-w-2xl mx-auto mt-10">
            <div className="bg-white shadow-md rounded-lg p-6 hover:scale-110 transition ease-in-out">
                <h2 className="text-lg font-semibold mb-2">Income vs Expense</h2>
                <div className="flex items-center  mb-4">
                    <div className="w-2/3 pr-4 ">
                        <Pie key={nanoid()} data={data} />
                    </div>
                    <div className="w-1/3 pl-4">
                        <p className="text-sm text-gray-500">Income</p>
                        <p className="text-2xl font-bold text-green-600">{incomePercentage}%</p>
                        <p className="text-sm text-gray-500">Expense</p>
                        <p className="text-2xl font-bold text-red-600">{expensePercentage}%</p>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default PieChart;
