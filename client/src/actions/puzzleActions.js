import fetch from 'isomorphic-fetch';

export function fetchPuzzles() {
    return (dispatch) => {
        dispatch({type: 'LOADING_PUZZLES'})
        return fetch('http://localhost:3001/puzzles.json')
        .then(response => response.json())
        .then(puzzles => dispatch({ type: 'FETCH_PUZZLES', payload: puzzles }));
    }
}