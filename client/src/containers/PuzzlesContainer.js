import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPuzzles, deletePuzzle } from '../actions/puzzleActions';
import Puzzle from '../components/Puzzle'
import PuzzleForm from './PuzzleForm';
import PuzzleList from '../components/PuzzleList';

class Puzzles extends Component {
    constructor(props) {
        super();
        this.state = {
            puzzles: props.puzzleState.puzzles
        }
    }

    componentDidMount() {
        this.props.fetchPuzzles();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.puzzleState.puzzles !== prevProps.puzzleState.puzzles) {
            this.setState({
                puzzles: this.props.puzzleState.puzzles
            })
        }
    }

    showPuzzleForm = (e) => {
        e.preventDefault();
        const puzzleId = e.target.dataset.id
        this.props.history.push(`/puzzles/${puzzleId}/edit`)
    }

    handleDeletePuzzle = (e) => {
        e.preventDefault();
        const puzzleId = e.target.dataset.id
        this.props.deletePuzzle(puzzleId);
        this.props.history.push(`/puzzles/`);
    }

    render() {
        const puzzles = this.state.puzzles;
        const puzzlesDiv = (
            <div id="puzzles">
                <Route 
                    exact path="/puzzles/new" 
                    render={() => 
                        <PuzzleForm crud="create" />
                    } 
                />
                <Route 
                    exact path={`${this.props.match.url}/:puzzleId`} 
                    render={ (props) => 
                        <Puzzle 
                            puzzles={puzzles} 
                            handleDeletePuzzle={this.handleDeletePuzzle}
                            showPuzzleForm={this.showPuzzleForm}
                            {...props} 
                        />
                    }
                />

                <Route 
                    path={`${this.props.match.url}/:puzzleId/edit`} 
                    render={() => <PuzzleForm crud="update" puzzles={puzzles} />} 
                />
                    
                <Route 
                    exact path={this.props.match.url} 
                    render={() => <PuzzleList puzzles={puzzles} />} 
                />
                
            </div>
        )

        const loading = <p>Loading puzzles...</p>
        return (
            <div>
                { this.props.loadingPuzzles ? loading : puzzlesDiv }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        puzzleState: state.puzzles,
        loadingPuzzles: state.loading
    }
}

export default Puzzles = withRouter(connect(mapStateToProps, {fetchPuzzles, deletePuzzle})(Puzzles));