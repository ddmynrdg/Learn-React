import React, { Component } from 'react'
import axios from 'axios'
const UserContext = React.createContext()
// Provider, Consumer
const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_USER":
            return { 
                ...state,
                users: [...state.users, action.payload]
            }
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
        users: [ ],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        } 
    }
    componentDidMount = async () => {
        // json-server and axios packages install
        // terminal in $json-server --watch api/db.json --port 3004
        const response = await axios.get("http://localhost:3004/users")
        console.log(response)
        this.setState({
            users: response.data
        })
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