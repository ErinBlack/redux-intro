import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

// allowing us ot access reduxState on props
const mapReduxStateToProps = (reduxState) => ({
  reduxState
})

class App extends Component {
  render() {
    return (
      <div className="App">
      <div>{JSON.stringify(this.props.reduxState.counterReducer)}</div>
      {/* dispatch takes in a n action*/}
        <button onClick={() => this.props.dispatch({type: 
          'ADDTOCOUNTER'})}>Add </button>
          <button onClick={() => this.props.dispatch({type:
            'SUBTRACTFROMCOUNTER'})}>Subtract</button>
          
      </div>
    );
  }
}

// connect() allows us to dispatch
// connect(mapReduxStateToProps) to access information
export default connect(mapReduxStateToProps)(App);
