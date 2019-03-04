import React, { Component } from 'react';
import { connect } from 'react-redux';






class Thanks extends Component {
    thankClick = () => {
    this.props.history.push('/')

    }
    render() {
        return (
            <div className="App">
                <h1>Thanks for submitting feedback!!</h1>

                
         <button onClick={this.thankClick}>Leave New Feedback</button>

            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Thanks);