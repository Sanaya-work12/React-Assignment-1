import React, { Component } from 'react';
import './App.css';

import UserInput from './Components/Input/UserInput';
import UserOutput from './Components/Output/UserOutput';

class App extends Component {

  state = {
    userName: 'Preeti'
  }

  inputChangeHandler = (event) => {
    this.setState({
      userName: event.target.value
    })
  }

  render() {
    const styles = {
      borderBottom: '1px solid #696969',
      borderTop: '1px solid #696969',
      fontSize: '44px',
      padding: '20px'
    }

    return (
      <div className="App">
        
        <h1 style={ styles }>Welcome to Aria University</h1>

        <UserInput 
        userName={ this.state.userName }
        changed={ this.inputChangeHandler }></UserInput>

        <UserOutput userName="Shruti" ></UserOutput>

        <UserOutput userName={ this.state.userName }></UserOutput>

      </div>
    );
  }
}

export default App;
