import React from 'react';

const ExpenseItem = ({ name, amount }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Amount: ${amount}</p>
      {/* Additional details of the expense item can be displayed here */}
    </div>
  );
};

export default ExpenseItem;
