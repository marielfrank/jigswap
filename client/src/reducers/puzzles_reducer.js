export default ( state={ loading: false, puzzles: [] }, action ) => {
    switch( action.type ) {
        case 'LOADING_PUZZLES':
            return {...state, loading: true}
        case 'FETCH_PUZZLES':
            return {...state, puzzles: action.payload, loading: false}
        case 'CREATE_PUZZLE':
            return {...state, puzzles: state.puzzles.concat(action.payload)}
        case 'UPDATE_PUZZLE':
            const puzzle = action.payload
            const index = state.puzzles.findIndex(p => p.id === puzzle.id);
            return {...state, puzzles: [...state.puzzles.slice(0, index), puzzle, ...state.puzzles.slice(index + 1)]}
        case 'DELETE_PUZZLE':
            return {...state, puzzles: state.puzzles.filter(puz => puz.id !== action.payload.puzzleId)}
        default:
            return state
    }
}