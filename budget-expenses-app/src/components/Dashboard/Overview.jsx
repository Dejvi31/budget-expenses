import React from 'react';

const Overview = ({ totalBudget, totalExpenses }) => {
  return (
    <div>
      <h2>Overview</h2>
      <p>Total Budget: ${totalBudget}</p>
      <p>Total Expenses: ${totalExpenses}</p>
      <p>Remaining Budget: ${totalBudget - totalExpenses}</p>
    </div>
  );
};

export default Overview;
