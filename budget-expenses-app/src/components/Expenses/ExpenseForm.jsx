import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new expense object with the form values
    const newExpense = {
      name: name,
      amount: parseFloat(amount),
    };

    // Pass the new expense to the parent component using the onAddExpense callback
    onAddExpense(newExpense);

    // Clear the form input fields after submission
    setName('');
    setAmount('');
  };

  return (
    <div>
      <h2>Add New Expense</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
