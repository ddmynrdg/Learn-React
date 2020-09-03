import React, { Component } from 'react'

const UserContext = React.createContext()
// Provider, Consumer

export class UserProvider extends Component {
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
            }
        ]
      }
    render() {
        return (
            <UserContext.Provider value= {this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

const UserComsumer = UserContext.Consumer
export default UserComsumer