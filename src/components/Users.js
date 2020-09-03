import React, { Component } from 'react'
import User from './User'
import UserComsumer from '../context'
export default class Users extends Component {
    render() {
        return(
            <UserComsumer>
                {
                    value => {
                        const {users} = value
                        return (
                            <div>
                                {
                                    users.map(user => {
                                        return(
                                            <User
                                                key= {user.id}
                                                name= {user.name}
                                                salary= {user.salary}
                                                department={user.department}
                                            />
                                        )
                                    })
                                
                                }
                            </div>
                        )
                    }
                }
            </UserComsumer>
        )
    }
}
