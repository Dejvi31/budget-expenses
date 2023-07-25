import React from 'react';

const BudgetItem = ({ name, amount }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Amount: ${amount}</p>
      {/* Additional details of the budget item can be displayed here */}
    </div>
  );
};

export default BudgetItem;
