import React,{Component} from 'react';
import Navbar from "./components/Navbar";
import Users from "./components/Users"
import './App.css';

class App extends Component {
  state = {

    users: [
      {
        id: 1,
        name : "Person Name 1",
        salary : "Xk",
        department : "Engineering"
      },
      {
        id: 2,
        name : "Person Name 2",
        salary : "yk",
        department : "Marketing"
      },
      {
        id:31,
        name : "Person Name 3",
        salary : "zk",
        department : "Sales"
      }
    ]
  }
  render() {
    return (
      <div className="container">
        <Navbar title="User App"/>
        <hr/>
        <Users users = {this.state.users}/>
        
      </div>
    );
  }
}
export default App;
