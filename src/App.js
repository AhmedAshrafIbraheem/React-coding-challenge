import React, { Component } from 'react';
import UserInput from './Components/UserInput'
import AllOutput from './Components/AllOutput'
import './App.css';

class App extends Component {
  
  state = {
    userInput : ''
  };

  userInputChangeHandler = (event) => {
    this.setState({
      userInput: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <UserInput changed={this.userInputChangeHandler} />
        <AllOutput toView={this.state.userInput} />
      </div>
    );
  }
}

export default App;
