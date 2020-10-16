import React, { Component } from 'react'

const UserContext = React.createContext();
// Provider, Consumer

export class UserProvider extends Component {

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
            <UserContext.Provider value = {this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;