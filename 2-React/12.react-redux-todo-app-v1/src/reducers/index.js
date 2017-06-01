
import { combineReducers } from 'redux';
import todosReducer from './todos';

let rootReducer = combineReducers({
    "todosState": todosReducer
});

export default rootReducer;


