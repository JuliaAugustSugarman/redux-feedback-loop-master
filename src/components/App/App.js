import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';

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
            <Route exact path="/understanding" component={Understanding} />
            <Route exact path="/supported" component={Supported} />
            <Route exact path="/comments" component={Comments} />
            <Route exact path="/review" component={Review} />
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
