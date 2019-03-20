import React, { Component } from 'react';
import './App.css';
import Speaker from './speaker/Speaker';

class App extends Component {
  state = {
    greeting: '',
    message: 'no message'
  };

  greet = () => {
    this.setState({ greeting: 'Hello!' });
  };

  speak = () => {
    this.setState({ message: 'this is a new message' });
  };

  render() {
    return (
      <div className="App">
        <h2>Hello World</h2>
        <div>
          <button onClick={this.greet}>click me</button>
          <p>{this.state.greeting}</p>
        </div>
        <Speaker message={this.state.message} speak={this.speak} />
      </div>
    );
  }
}

export default App;
