import { combineReducers } from 'redux';
import puzzlesReducer from './puzzles_reducer'
import auth_reducer from './auth_reducer';

export default combineReducers({puzzles: puzzlesReducer, auth: auth_reducer})