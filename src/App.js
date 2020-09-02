import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Users from './components/Users'
import './App.css';

class App extends Component {
  state = {
    users: [
     {
        id:1, 
        name: "didemmm",
        salary: "5000",
        department: "ARGE"
    },
    {
      id: 2, 
      name: "dilek",
      salary: "4000",
      department: "pazarlama"
    },
    {
      id: 3, 
      name: "dilmen",
      salary: "8000",
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
          <Users users={this.state.users}/>
        </div>
      );
}
}

export default App;
