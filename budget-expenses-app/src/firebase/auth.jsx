// firebase/auth.jsx
import firebase from './config';

// User registration
export const registerUser = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};

// User login
export const loginUser = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

// User logout
export const logoutUser = () => {
  return firebase.auth().signOut();
};

// Listen to authentication state changes
export const onAuthStateChanged = (callback) => {
  return firebase.auth().onAuthStateChanged(callback);
};
