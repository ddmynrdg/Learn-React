import React, { Component } from 'react';
import Navbar from './components/Navbar'
import User from './components/User'
import './App.css';

class App extends Component {
  state = {
    user: [
     {
        id:1, 
        name: "didemmm",
        salary: 5000,
        department: "ARGE"
    },
    {
      id: 2, 
      name: "dilek",
      salary: 4000,
      department: "pazarlama"
    },
    {
      id: 3, 
      name: "dilmen",
      salary: 8000,
      department: "satış"
    },
    ]
  }
  render() 
  {
      return (
        <div  className="container">
          <Navbar />
          <hr/>
          <User/>
        </div>
      );
}
}

export default App;
