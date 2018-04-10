import React, { Component } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPuzzles, deletePuzzle } from '../actions/puzzleActions';
import Puzzle from '../components/Puzzle'
import PuzzleForm from './PuzzleForm';

class Puzzles extends Component {

    componentDidMount() {
        this.props.fetchPuzzles();
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
        const puzzles = this.props.puzzleState.puzzles;
        return (
            <div id="puzzle-list">
                <Route exact path={`${this.props.match.url}/:puzzleId`} render={ (props) => 
                    <Puzzle 
                        puzzles={puzzles} 
                        handleDeletePuzzle={this.handleDeletePuzzle}
                        showPuzzleForm={this.showPuzzleForm}
                        {...props} 
                    />
                }/>

                <Route 
                    path={`${this.props.match.url}/:puzzleId/edit`} 
                    render={() => <PuzzleForm crud="update" puzzles={puzzles} />} 
                />
                    
                <Route exact path={this.props.match.url} render={(puzzleLinks) => 
                    (<div className="grid-container" >{puzzles.map(puz => 
                        <Link className="puzzle-list-item grid-item" key={puz.id} to={`/puzzles/${puz.id}`}>
                            {puz.name} - {puz.pieces} pieces
                        </Link>
                    )}</div>)
                    } />
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        puzzleState: state.puzzles
    }
}

export default Puzzles = withRouter(connect(mapStateToProps, {fetchPuzzles, deletePuzzle})(Puzzles));