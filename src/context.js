import React, { Component } from 'react'

const UserContext = React.createContext()
// Provider, Consumer
const reducer = (state, action) => {
    switch(action.type) {
        case "DELETE_USER":
            return{
                ...state,
                users: state.users.filter(user => action.payload !== user.id)
            }
        default: 
            return state}
    }
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
        ],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        } 
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