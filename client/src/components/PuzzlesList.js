import React from 'react';
import { Link, Route } from 'react-router-dom';
import Puzzle from './Puzzle'

const PuzzleList = (props) => {
    const puzzleLinks = props.puzzles.map(puz => 
        <Link className="puzzle-list-item" key={puz.id} to={`/puzzles/${puz.id}`}>{puz.name} - {puz.pieces} pieces</Link>
      )
    return (
        <div id="puzzle-list">
            <Route path={`${props.match.url}/:puzzleId`} component={Puzzle}/>
            {puzzleLinks}
        </div>
    )
}

export default PuzzleList;