import React from 'react';
import { connect } from 'react-redux';
import { createPuzzle } from '../actions/puzzleActions';

class PuzzleForm extends React.Component {
    constructor(props){
      super(props);
  
      this.state = {
        name: '', 
        pieces: 0,
        missing_pieces: 0,
        user_id: parseInt(props.user_id, 10)
      };
    }

    handleOnChange = (e) => {
        const {name, value} = e.target;
        this.setState({
          [name]: value
        });
    }

    handleOnCreatePuzzle = (e) => {
        e.preventDefault();
        this.props.createPuzzle(this.state);
    }

    render() {
        return (
            <div id="login">
            <h2>Swap Your Puzzle!</h2>
                <form onSubmit={this.handleOnCreatePuzzle}>
                    <label htmlFor="name">What is the puzzle called? </label>
                    <br />
                    <input
                        name="name"
                        id="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleOnChange}
                    />
                    <br /><br />
                    <label htmlFor="pieces">How many pieces does it have? </label>
                    <br />
                    <input
                        name="pieces"
                        id="pieces"
                        type="number"
                        value={this.state.pieces}
                        onChange={this.handleOnChange}
                    />
                    <br /><br />
                    <label htmlFor="missing_pieces">How many missing pieces does it have?</label>
                    <br />
                    <input
                        name="missing_pieces"
                        id="missing_pieces"
                        type="number"
                        value={this.state.missing_pieces}
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

const mapStateToProps = (state) => {
    return {
        user_id: state.auth.currentUser.id
    }
}
export default PuzzleForm = connect(mapStateToProps, {createPuzzle})(PuzzleForm);