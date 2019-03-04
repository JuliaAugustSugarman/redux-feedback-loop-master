import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import Feelings from '../Feelings/Feelings';
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
        <header >

        </header>
        <Router>
          <div>
            <Route exact path="/" component={Feelings} />
          </div>
        </Router>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}

export default connect(mapReduxStateToProps)(App);
