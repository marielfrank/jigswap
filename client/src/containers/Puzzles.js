import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPuzzles } from '../actions/puzzleActions';
import Puzzle from '../components/Puzzle'

class Puzzles extends Component {

    componentDidMount() {
        this.props.fetchPuzzles();
    }

    render() {
        const puzzles = this.props.puzzleState.puzzles
        return (
            <div id="puzzle-list">
                <Route exact path={`${this.props.match.url}/:puzzleId`} component={Puzzle}/>
                <Route exact path={this.props.match.url} render={(puzzleLinks) => 
                    (<div>{puzzles.map(puz => 
                        <Link className="puzzle-list-item" key={puz.id} to={`/puzzles/${puz.id}`}>{puz.name} - {puz.pieces} pieces</Link>
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

export default Puzzles = connect(mapStateToProps, {fetchPuzzles})(Puzzles);