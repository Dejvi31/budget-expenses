import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { month: 'Jan', budget: 1000 },
  { month: 'Feb', budget: 1200 },
  { month: 'Mar', budget: 800 },
  // Add more data points as needed
];

const BudgetChart = () => {
  return (
    <div>
      <h2>Budget Chart</h2>
      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="budget" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default BudgetChart;
