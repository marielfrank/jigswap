import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPuzzles} from '../actions/puzzleActions';
import PuzzleList from '../components/PuzzlesList';

class Home extends Component {

    componentDidMount() {
        this.props.fetchPuzzles();
    }

    render() {
        return (
            <div id="home">
                <PuzzleList puzzles={this.props.puzzleState.puzzles} match={this.props.match} />
            </div>
        );
    }
}
      
const mapStateToProps = (state) => {
    return {
        puzzleState: state.puzzles
    }
}

export default Home = connect(mapStateToProps, {fetchPuzzles})(Home);