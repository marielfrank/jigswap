import { combineReducers } from 'redux';
import puzzlesReducer from './puzzles_reducer'

export default combineReducers({puzzles: puzzlesReducer,})