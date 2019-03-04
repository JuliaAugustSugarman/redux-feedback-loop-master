import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Review from '../Review/Review';





class Supported extends Component {
    state = {
        supported: '',
    }

    handleChange = (event) => {
        console.log('feelings handleChange', event);

        this.setState({
            supported: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const action = { type: 'SET_SUPPORTED', payload: this.state.supported }
        this.props.dispatch(action);
        //clear 
        this.setState({
            supported: '',
        })
        this.props.history.push('/comments');
    }

    render() {
        return (
            <div className="App">
                <h1>How well are you being supported?</h1>

                <form onSubmit={this.handleSubmit}>
                    <label>Supported</label>
                    <br />
                    <input onChange={this.handleChange} placeholder="scale of 1-5" type='text' value={this.state.supported} />
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

export default connect(mapReduxStateToProps)(Supported);