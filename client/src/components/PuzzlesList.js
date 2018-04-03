import React from 'react';

const PuzzleList = (props) => (
    <div id="puzzle-list">
            {props.puzzles.map(puz => 
              <div key={puz.id}><h3>{puz.name}</h3><p>{puz.pieces}</p></div>
            )}
    </div>
)

export default PuzzleList;