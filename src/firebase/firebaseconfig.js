import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAgUNxxIwZDdoSwwYRKRGtMfSj4FcFiZMs",
  authDomain: "crud-fb-13ec2.firebaseapp.com",
  projectId: "crud-fb-13ec2",
  storageBucket: "crud-fb-13ec2.appspot.com",
  messagingSenderId: "1039434829349",
  appId: "1:1039434829349:web:7aab91a16cc910654b39cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;