import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton';

export default class App extends Component {
  initialState = {
    input: "",
    previousNumber: "",
    total: "",
    operator: ""
  };

  state = this.initialState

  handleChange = val => {
    this.setState({ input: this.state.input + val })
  };

  addZeroToInput = val => {
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + val })
    };
  };

  addDecimal = val => {
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + val })
    }
  };

  clearInput = () => {
    this.setState(this.initialState);
  };

  doMath = (operator) => {
    if (isNaN(parseFloat(this.state.previousNumber))) {
      this.evaluate()
      this.setState({ 
        operator,
        input: "",
        previousNumber: this.state.input
      })
    } else {
      console.log(this.evaluate())
    }
  }

  evaluate = () => {
    switch (this.state.operator) {

      case "+":
        return this.setState({ input: (parseFloat(this.state.previousNumber) + parseFloat(this.state.input)).toString() })

      case "-":
        return this.setState({ input: (parseFloat(this.state.previousNumber) - parseFloat(this.state.input)).toString() })

      case "*":
        return this.setState({ input: (parseFloat(this.state.previousNumber) * parseFloat(this.state.input)).toString() })

      case "/":
        return this.setState({ input: (parseFloat(this.state.previousNumber) / parseFloat(this.state.input)).toString() })

      default:
        return this.state.input
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
            <Input>{this.state.input}</Input>
          </div>
          <div className="row">
            <Button handleClick={this.handleChange}>7</Button>
            <Button handleClick={this.handleChange}>8</Button>
            <Button handleClick={this.handleChange}>9</Button>
            <Button handleClick={(e) => this.doMath(e)}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.handleChange}>4</Button>
            <Button handleClick={this.handleChange}>5</Button>
            <Button handleClick={this.handleChange}>6</Button>
            <Button handleClick={(e) => this.doMath(e)}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.handleChange}>1</Button>
            <Button handleClick={this.handleChange}>2</Button>
            <Button handleClick={this.handleChange}>3</Button>
            <Button handleClick={(e) => this.doMath(e)}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addDecimal}>.</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.evaluate}>=</Button>
            <Button handleClick={(e) => this.doMath(e)}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}