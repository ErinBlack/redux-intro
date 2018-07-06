import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

// allowing us ot access reduxState on props
const mapReduxStateToProps = (reduxState) => ({
  reduxState
})

class App extends Component {
  constructor(){
    super();
    this.state = {
      color: '',
    }
  }

  handleColorChange = (event) => {
    console.log('in handle color change with ', event.target.value);
    this.setState({
      color: event.target.value
    })
  } 

  sendColorToRedux = (e) => {
    e.preventDefault();
    // Send the Color to Redux with an action type of ADD_COLOR
    const action = {type: 'ADD_COLOR', payload: this.state.color};
    this.props.dispatch(action);
    // clear value of color input field 
    this.setState({
      color: ''
    })
  }

  deleteColors = (e) => {
    e.preventDefault();
    const action = {type: 'DELETE_COLORS'}
    this.props.dispatch(action);
  }


  render() {
    return (
      <div className="App">
      <pre>{JSON.stringify(this.props.reduxState)}</pre>
        <div>{JSON.stringify(this.props.reduxState.counterReducer)}</div>
        {/* dispatch takes in a n action*/}
          <button onClick={() => this.props.dispatch({type: 
            'ADD_TO_COUNTER'})}>Add </button>
            <button onClick={() => this.props.dispatch({type:
              'SUBTRACT_FROM_COUNTER'})}>Subtract</button>
          <h3>Enter Color Here</h3>
          <form onSubmit={this.sendColorToRedux}>
            <input id="color" onChange={this.handleColorChange} value={this.state.color}/>
            <button type="submit">Submit Color</button>
          </form>
          <button onClick={this.deleteColors}>Clear All</button>
      </div>
    );
  }
}

// connect() allows us to dispatch
// connect(mapReduxStateToProps) to access information
export default connect(mapReduxStateToProps)(App);
