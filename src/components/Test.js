import React, { Component } from 'react'

export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a:10
        }
        console.log("1111 = ", this.state.a)
      }
    componentDidMount = () => {
        console.log("componentDidMount")
        this.setState({
            a: 34
        })
        console.log("componentDidMount set state", this.state.a )
    }
    componentDidUpdate = (prevProps, prevState) => {
        console.log("componentDidUpdate 2222", this.state.a)
    }
    shouldComponentUpdate = () => {
      console.log("shouldComponentUpdate = ",  this.state.a)
     // return true  return true
     return false
    }
    
    render() {
        console.log("render")
        console.log("render set state", this.state.a )
        return (
        <div>
            
        </div>
        )
  }
}
