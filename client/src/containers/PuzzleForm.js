import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { createPuzzle, updatePuzzle } from '../actions/puzzleActions';

class PuzzleForm extends React.Component {
    constructor(props){
      super(props);
  
      this.state = {
        name: '', 
        pieces: 0,
        missing_pieces: 0,
        user_id: this.props.user_id
      };
    }

    handleOnChange = (e) => {
        const {name, value} = e.target;
        this.setState({
          [name]: value
        });
    }

    handleOnSubmitPuzzle = (e) => {
        e.preventDefault();
        console.log("in handleOnSubmit, e is", e)
        console.log("in handleOnSubmit, props is", this.props)
        if (this.props.crud === "create") {
            this.props.createPuzzle(this.state)
            this.props.history.push('/puzzles');
        } else if (this.props.crud === "update") {
            this.props.updatePuzzle(this.state);
            // get puzzle id from e
            this.props.history.push('/puzzles')
        }
    }

    render() {
        return (
            <div id="login">
            <h2>Swap Your Puzzle!</h2>
            
                <form onSubmit={this.handleOnSubmitPuzzle} data-id={this.props.match.params.puzzleId} >
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
                        value={this.props.crud === "create" ? "Add Puzzle" : "Update Puzzle"}
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
export default PuzzleForm = withRouter(connect(mapStateToProps, {createPuzzle, updatePuzzle})(PuzzleForm));