export default ( state={ loading: false, puzzles: [] }, action ) => {
    switch( action.type ) {
        case 'LOADING_PUZZLES':
            return {...state, loading: true}
        case 'FETCH_PUZZLES':
            return {...state, puzzles: action.payload, loading: false}
        default:
            return state
    }
}