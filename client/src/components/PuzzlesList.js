import React from 'react';
import { Link } from 'react-router-dom';

const PuzzleList = (props) => {
    const puzzles = props.puzzles.map(puz => 
        <Link className="puzzle-list-item" key={puz.id} to={`/puzzles/${puz.id}`}>{puz.name} - {puz.pieces} pieces</Link>
      )
    return (
        <div id="puzzle-list">
            {puzzles}
        </div>
    )
}

export default PuzzleList;