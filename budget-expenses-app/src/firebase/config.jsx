import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDTSLN__17_mrPEYqJfJ6sC6m2zi4_l8n8",
  authDomain: "budget-expenses-30dc6.firebaseapp.com",
  projectId: "budget-expenses-30dc6",
  storageBucket: "budget-expenses-30dc6.appspot.com",
  messagingSenderId: "154797121889",
  appId: "1:154797121889:web:1aa7146a42d4943436a520",
  measurementId: "G-ZMENREKMPB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);