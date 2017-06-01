
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

import $ from 'jquery';

let defaultState = {
    todosState: []
};

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
);


const store = createStore(rootReducer, defaultState, enhancer);

const apiUrl = "http://localhost:8080/api/todos";
$.ajax(apiUrl, {
    method: "GET",
    success: function (todos) {
        store.dispatch({ type: 'LOAD_ALL_TODOS', todos });
    }
});


export default store;


