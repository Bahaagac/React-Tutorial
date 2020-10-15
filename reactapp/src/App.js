import React from 'react';
import Navbar from "./components/Navbar";
import User from "./components/User"
import './App.css';

function App() {
  return (
    <div className="container">
      <Navbar title="User App"/>
      <hr/>
      <User
      name="Person Name"
      department = "IT"
      salary = "5k"/>
      

      <User
      name="Person Name"
      department = "IT"
      salary = "Xk"/>
      
    </div>
  );
}
export default App;
