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
        <table><tbody><tr>
          <td><UserInput changed={this.userInputChangeHandler} /></td>
          <td><AllOutput toView={this.state.userInput} /></td>
        </tr></tbody></table>
      </div>
    );
  }
}

export default App;
