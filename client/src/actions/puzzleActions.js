import fetch from 'isomorphic-fetch';

const API_URL = "http://localhost:3001"

export function fetchPuzzles() {
    return (dispatch) => {
        dispatch({type: 'LOADING_PUZZLES'})
        return fetch(`${API_URL}/puzzles.json`)
        .then(response => response.json())
        .then(puzzles => dispatch({ type: 'FETCH_PUZZLES', payload: puzzles }));
    }
}

export function getPuzzle(id) {
    return dispatch => {
        dispatch({type: 'GET_PUZZLE', payload: id})
    }
}

export function createPuzzle(puzzleDeets) {
    return dispatch => {
        return fetch(`${API_URL}/puzzles`, {
            method: 'post',
            body: JSON.stringify({puzzle: puzzleDeets}),
            headers: {
                "Accept":"application/json",
                "Content-Type":"application/json"
            }
        })
            .then(resp => resp.json())
            .then(jresp => {
                dispatch({
                    type: 'CREATE_PUZZLE',
                    payload: jresp
                })
            })
            .catch((errors) => {
                console.log(errors)
                // dispatch(authFailure(errors))
            })
    }
}

export function updatePuzzle(puzzleDeets) {
    console.log(e)
}

export function deletePuzzle(puzzleId) {
    console.log(e)
}