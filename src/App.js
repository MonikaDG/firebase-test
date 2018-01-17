import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to intervention1</h1>
        </header>
        <p className="App-intro">
        Releasing capacity of bank branches (by supporting high inflow of customers)
        </p>
      </div>
    );
  }
}

export default App;
