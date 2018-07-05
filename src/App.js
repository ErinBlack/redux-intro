import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={() => this.props.dispatch({type: 
          'BUTTON_ONE'})}>BUTTON ONE</button>
      </div>
    );
  }
}

export default App;
