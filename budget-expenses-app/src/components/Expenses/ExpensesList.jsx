import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpensesList = ({ expenses }) => {
  return (
    <div>
      <h2>Expenses List</h2>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} name={expense.name} amount={expense.amount} />
      ))}
    </div>
  );
};

export default ExpensesList;
