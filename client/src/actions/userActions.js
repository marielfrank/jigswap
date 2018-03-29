import fetch from 'isomorphic-fetch';

export function createUser() {
    return (dispatch) => {
        dispatch({type: 'CREATING_USER'})
        // console.log(e)
        // return fetch('http://localhost:3001/puzzles.json')
        // .then(response => response.json())
        // .then(puzzles => dispatch({ type: 'FETCH_PUZZLES', payload: puzzles }));
    }
}