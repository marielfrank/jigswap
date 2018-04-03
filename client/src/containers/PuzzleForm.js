import React from 'react';
// import { connect } from 'react-redux';
// import { addPuzzle } from '../actions/puzzleActions';

class PuzzleForm extends React.Component {
    constructor(props){
      super(props);
  
      this.state = {
        email: '', 
        password: ''
      };
    }

    handleOnChange = (e) => {
        const {name, value} = e.target;
        this.setState({
          [name]: value
        });
    }

    handleOnSignup = (e) => {
        e.preventDefault();
        this.props.authenticate(this.state);
    }

    render() {
        return (
            <div id="login">
            <h2>Add Puzzle</h2>
                <form onSubmit={this.handleOnSignup}>
                    <label htmlFor="email">Email: </label>
                    <br />
                    <input
                        name="email"
                        id="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleOnChange}
                    />
                    <br /><br />
                    <label htmlFor="password">Password:</label>
                    <br />
                    <input
                        name="password"
                        id="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleOnChange}
                    />
                    <br /><br />
                    <input
                        type="submit"
                        value="Add Puzzle"
                    />
                </form>
            </div>
        );
    }
}

export default PuzzleForm //= connect(null, {addPuzzle})(PuzzleForm);