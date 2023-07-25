import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { category: 'Food', expense: 300 },
  { category: 'Entertainment', expense: 200 },
  { category: 'Transportation', expense: 150 },
  // Add more data points as needed
];

const ExpenseChart = () => {
  return (
    <div>
      <h2>Expense Chart</h2>
      <BarChart width={500} height={300} data={data}>
        <XAxis dataKey="category" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar dataKey="expense" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default ExpenseChart;
