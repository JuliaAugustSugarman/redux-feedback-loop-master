import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
// import Review from '../Review/Review';





class Review extends Component {
    handleClick = (event) => {
        axios({
            method: 'POST',
            url: '/review',
            data: this.props.feedbackReducer,
        }).then((response) => {
            this.props.history.push('/thanks')
        })//end then statement
    };//end handle click

    render() {
        return (
            <div className="App">
                <h1>REVIEW YOUR FEEDBACK</h1>


                <br />

                <div>
                    <h3> FEELINGS: {this.props.feedbackReducer.feelings}</h3>
                    <h3> UNDERSTANDING: {this.props.feedbackReducer.understanding}</h3>
                    <h3> SUPPORT: {this.props.feedbackReducer.supported}</h3>
                    <h3> COMMENTS: {this.props.feedbackReducer.comments}</h3>
                </div>
                <button onClick={this.handleClick}>SUBMIT</button>
                <br />
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Review);