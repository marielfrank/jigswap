import React from 'react';
import {Link} from 'react-router-dom';

const Puzzle = ({match, puzzles, handleDeletePuzzle, showPuzzleForm, userId}) => {
    var puzzle = puzzles.find(p => p.id === parseInt(match.params.puzzleId, 10));
    var puzzleData;

    const contact = <p>Contact owner: <a href={`mailto:${puzzle.user.email}`}>{puzzle.user.email}</a></p>

    const manage = (
        <div>
            <button data-id={puzzle.id} onClick={(e) => showPuzzleForm(e)}>Edit</button>
            <button data-id={puzzle.id} onClick={(e) => handleDeletePuzzle(e)}>Delete</button>
        </div>
    )
    console.log(userId, puzzle)
    if (puzzle) {
        puzzleData = 
            <div>
                <h2>{puzzle.name}</h2>
                <p>Pieces: {puzzle.pieces}</p>
                <p>Missing pieces: {puzzle.missing_pieces}</p>
                {userId === puzzle.user.id ? manage : contact}
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