import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
// import Review from '../Review/Review';





class Review extends Component {



    render() {
        return (
            <div className="App">
                <h1>REVIEW YOUR FEEDBACK</h1>


                <br/>

                <div>
                    <h3> FEELINGS: {this.props.feedbackReducer.feelings}</h3>
                    <h3> UNDERSTANDING: {this.props.feedbackReducer.understanding}</h3>
                    <h3> SUPPORT: {this.props.feedbackReducer.support}</h3>
                    <h3> COMMENTS: {this.props.feedbackReducer.comment}</h3>
                
                </div>

                <br/>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Review);