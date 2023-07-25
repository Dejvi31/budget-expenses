import React, { useState } from 'react';

const BudgetForm = ({ onAddBudgetItem }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new budget item object with the form values
    const newBudgetItem = {
      name: name,
      amount: parseFloat(amount),
    };

    // Pass the new budget item to the parent component using the onAddBudgetItem callback
    onAddBudgetItem(newBudgetItem);

    // Clear the form input fields after submission
    setName('');
    setAmount('');
  };

  return (
    <div>
      <h2>Add New Budget Item</h2>
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
        <button type="submit">Add Budget Item</button>
      </form>
    </div>
  );
};

export default BudgetForm;
