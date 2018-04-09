import React from 'react';
import {Link} from 'react-router-dom';

const Puzzle = ({match, puzzles, handleDeletePuzzle, showEditForm}) => {
    var puzzle = puzzles.find(p => p.id === parseInt(match.params.puzzleId, 10));
    var puzzleData;

    if (puzzle) {
        puzzleData = 
            <div>
                <h2>{puzzle.name}</h2>
                <p>Pieces: {puzzle.pieces}</p>
                <p>Missing pieces: {puzzle.missing_pieces}</p>
                <p>Contact owner: <a href={`mailto:${puzzle.user.email}`}>{puzzle.user.email}</a></p>
                <button data={puzzle} onClick={(e) => showEditForm(e)}>Edit</button>
                <button data={puzzle} onClick={(e) => handleDeletePuzzle(e)}>Delete</button>
            </div>
    } else {
        puzzleData = <p>Sorry, we can't find this puzzle...Check out current puzzles up for swapping <Link to='/puzzles'>here</Link></p>
    }
    return (
        <div>
            {puzzleData}
        </div>
    )

}

export default Puzzle;