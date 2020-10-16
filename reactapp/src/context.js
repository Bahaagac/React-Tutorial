import React, { Component } from 'react'

const UserContext = React.createContext();
// Provider, Consumer

const reducer = (state,action) => {
    switch(action.type) {
        case "DELETE_USER" :
            return {
                ...state,
                users : state.users.filter(user => action.payload !== user.id)
            }
        default:
            return state
        case "ADD_USER" :
            return {
                ...state,
                users : [...state.users,action.payload]
            }
    }
}

export class UserProvider extends Component {

    state = {

        users: [
          {
            id: "unique-1",
            name : "Person Name 1",
            salary : "Xk",
            department : "Engineering"
          },
          {
            id: "unique-2",
            name : "Person Name 2",
            salary : "yk",
            department : "Marketing"
          },
          {
            id: "unique-3",
            name : "Person Name 3",
            salary : "zk",
            department : "Sales"
          }
        ],
        dispatch : action => {
            this.setState(state => reducer(state,action))
        }
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