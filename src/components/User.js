import React, { Component } from 'react'
import PropTypes from 'prop-types' //impt

export default class User extends Component{

    static defaultProps = {
        name: "isim",
        salary: "maaş",
        department: "departman"
    }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isVisible : true
    //     }
    // }  
    
    // ya da
    state = {
        isVisible:  false
    }

    // metodun this obj bind etme yolu
    // constructor(props) {
    //     super(props)
    //     this.onClickEvent = this.onClickEvent.bind(this)
    // }

    onClickEvent = (e) => {
        this.setState({
            isVisible : !this.state.isVisible
        })
       // console.log(number) // 34 ten once this olmalıdı
    }

    render () { 
        const {name, department, salary} = this.props
        const {isVisible } = this.state
        return (
            <div className='col-md-8 mb-4'>
                <div className="card">
                    <div className="card-header d-flex.justify-content-between">
                        <h4 className="d-inline" onClick= {this.onClickEvent}>{name}</h4>
                        <i className="far fa-trash-alt" style={{cursor: 'pointer'}}></i>
                    </div>

                { isVisible ? 
                        <div className="card-body">
                            <p className="card-text">Salary: {salary}</p>
                            <p className="card-text">Department: {department}</p>
                        </div> :null
                    }
                </div>
            </div>
        )
    }
}
User.propTypes = {
    name: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired
}

// User.defaultProps = {
//     name: "isim",
//     salary: "maaş",
//     department: "departman"
// }

// ya da
// static defaultProps
