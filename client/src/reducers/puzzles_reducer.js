export default ( state={ loading: false, puzzles: [] }, action ) => {
    switch( action.type ) {
        case 'LOADING_PUZZLES':
            return {...state, loading: true}
        case 'FETCH_PUZZLES':
            return {...state, puzzles: action.payload, loading: false}
        case 'CREATE_PUZZLE':
            return {...state, puzzles: state.puzzles.concat(action.payload)}
        case 'UPDATE_PUZZLE':
        // add update
            return {...state }
        default:
            return state
    }
}