import React from 'react';

const BudgetList = ({ budgetItems }) => {
  return (
    <div>
      <h2>Budget List</h2>
      <ul>
        {budgetItems.map((budgetItem) => (
          <li key={budgetItem.id}>
            {budgetItem.name} - ${budgetItem.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BudgetList;
