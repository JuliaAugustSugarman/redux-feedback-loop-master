import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';





class comments extends Component {
    state = {
        comments: '',
    }

    handleChange = (event) => {
        console.log('comments handleChange', event);

        this.setState({
           comments: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const action = { type: 'SET_COMMENTS', payload: this.state.comments }
        this.props.dispatch(action);
        //clear 
        this.setState({
            comments: '',
        })
        this.props.history.push('/review');
    }

    render() {
        return (
            <div className="App">
                <h1>Any comments you want to leave?</h1>

                <form onSubmit={this.handleSubmit}>
                    <label>Comments</label>
                    <br />
                    <input onChange={this.handleChange} placeholder="Comment" type='text' value={this.state.comments} />
                    <br />
                    <input type="submit" value="Next" />
                </form>

                <br />
                <div>
                    <Review />
                </div>

                <br />
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(comments);