import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logger from 'redux-logger';
import App from './components/App/App';


// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


const feedbackEmptyObject = {feelings: '', undertanding:'', supports: '', comments:'',};

//Reducer
const feedbackReducer = (state = [], action) => {
    if (action.type === 'SET_FEELINGS') {

        state = action.payload;
    }
    return state;
}



















// The store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
    combineReducers({
     feedbackReducer
    }),
    applyMiddleware(logger), //mildle ware sits on the middle and interacts and intercepts things - or there are some that track what the redux state was before and after changes have been made.
);




// Wrap our App in a Provider, this makes Redux available in our entire application
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
