import React from 'react';
import {Link} from 'react-router-dom';

const PuzzleList = ({match, puzzles}) => {
    return (
        <div className="grid-container" >
            {puzzles.map(puz => 
                <Link className="puzzle-list-item grid-item" key={puz.id} to={`/puzzles/${puz.id}`}>
                    {puz.name} - {puz.pieces} pieces
                </Link>
            )}
        </div>
    )
}

export default PuzzleList;