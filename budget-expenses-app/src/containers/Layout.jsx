import React, { useState } from 'react';
import BudgetForm from '../components/Budgets/BudgetForm';
import BudgetList from '../components/Budgets/BudgetList';
import BudgetChart from '../components/Dashboard/BudgetChart';
import ExpenseForm from '../components/Expenses/ExpenseForm';
import ExpensesList from '../components/Expenses/ExpensesList';
import ExpenseChart from '../components/Dashboard/ExpenseChart';
import Overview from '../components/Dashboard/Overview';
import AppSettings from '../components/Settings/AppSettings';
import ProfileSettings from '../components/Settings/ProfileSettings';

const Layout = () => {
  // State for budget and expense data (you may fetch it from Firebase)
  const [budgetItems, setBudgetItems] = useState([]);
  const [expenses, setExpenses] = useState([]);

  // Add a new budget item to the budget list
  const handleAddBudgetItem = (newBudgetItem) => {
    // You can update the budgetItems state or send the data to Firebase
    // For now, let's just update the state
    setBudgetItems((prevBudgetItems) => [...prevBudgetItems, newBudgetItem]);
  };

  // Add a new expense to the expense list
  const handleAddExpense = (newExpense) => {
    // You can update the expenses state or send the data to Firebase
    // For now, let's just update the state
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  // Calculate total budget and total expenses for Overview component
  const totalBudget = budgetItems.reduce((total, item) => total + item.amount, 0);
  const totalExpenses = expenses.reduce((total, item) => total + item.amount, 0);

  return (
    <div>
      {/* Your main layout components */}
      <AppSettings />
      <ProfileSettings />

      {/* Budget components */}
      <h2>Budget</h2>
      <BudgetForm onAddBudgetItem={handleAddBudgetItem} />
      <BudgetList budgetItems={budgetItems} />
      <BudgetChart />

      {/* Expense components */}
      <h2>Expenses</h2>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpensesList expenses={expenses} />
      <ExpenseChart />

      {/* Overview component */}
      <Overview totalBudget={totalBudget} totalExpenses={totalExpenses} />
    </div>
  );
};

export default Layout;
