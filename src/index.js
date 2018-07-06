import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// This will increase or decrease a number
// Whatever we return, is passed in as the 'state' on next function call
const counterReducer = (state = 0, action) => {
    //Filter down to specific action type
    if(action.type === 'ADD_TO_COUNTER') {
        return state + 1;
    }
    if (action.type === 'SUBTRACT_FROM_COUNTER') {
            return state - 1;
        }
    return state; // return the current state if no changes were made
}

const secondReducer = (state = [], action) => {
    if(action.type === 'ADD_COLOR') {
        // adding new color to the array
        return [...state, action.payload];
    }
    if(action.type === 'DELETE_COLORS') {
        return [];
    }
    return state;
}




const storeInstance = createStore(
    // This is a reducer
    combineReducers({
        counterReducer,
        secondReducer
    }),
    applyMiddleware(logger)
    
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
