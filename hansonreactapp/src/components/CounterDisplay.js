import React, { Component } from 'react'

class CounterDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };

  }
    
  handleIncrement = () => {

    this.setState((prevState) => (
      { 
        counter: prevState.counter + 1
      }
    ))
  }

  handleDecrement = () => {
      
    this.setState((prevState) => (
      { 
        counter: prevState.counter - 1
      }
    ))
  }

    render() {

      return <div>
        <div>{this.state.counter}</div>
        <button  onClick={this.handleIncrement}>+</button>
        <button disabled={this.state.counter === 0 ? true : false} onClick={this.handleDecrement}>-</button>
      </div>
    }
  }

  export default CounterDisplay;