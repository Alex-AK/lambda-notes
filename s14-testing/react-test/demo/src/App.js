import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    greeting: ''
  };

  greet = () => {
    this.setState({ greeting: 'Hello!' });
  };

  render() {
    return (
      <div className="App">
        <h2>Hello World</h2>
        <div>
          <button onClick={this.greet}>click me</button>
          <p>{this.state.greeting}</p>
        </div>
      </div>
    );
  }
}

export default App;
