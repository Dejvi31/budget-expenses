// firebase/data.jsx
import firebase from './config';

// Example: Add an expense to the database
export const addExpense = (userId, expenseData) => {
  return firebase.database().ref(`users/${userId}/expenses`).push(expenseData);
};

// Example: Get expenses for a specific user from the database
export const getExpenses = (userId) => {
  return firebase.database().ref(`users/${userId}/expenses`).once('value');
};
