

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'; // middleware


// Constants
//--------------------------------------------------------------------------------
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
//--------------------------------------------------------------------------------

// Sync Action Creators
function increment(value) {
    return { type: INCREMENT, value };
}

function decrement(value) {
    return { type: DECREMENT, value };
}

// Async Action Creator
function incrementAsync() {

    return function (dispatch) {

        // call Async API
        dispatch({ type: 'INCREMENT_INIT' });
        setInterval(function () {
            dispatch({ type: 'INCREMENT', value: 100 }); // on success
            // dispatch({ type: 'INCREMENT_FAIL', value: 100 }); // on failure
        }, 2000);

    }

}

//--------------------------------------------------------------------------------
// Reducer(s)
function counterReducer(state = { count: 0 }, action) {
    // console.log('counterReducer');
    switch (action.type) {
        case 'INCREMENT_INIT':
            console.log('INC Just start');
            break;
        case 'INCREMENT_INIT':
            console.log('INC failed');
            break;
        case INCREMENT: {
            return Object.assign({}, state, { count: state.count + action.value });
        }
        case DECREMENT: {
            return Object.assign({}, state, { count: state.count - action.value });
        }
    }
    return state;
}
//--------------------------------------------------------------------------


let rootReducer = combineReducers({
    "countState": counterReducer
});


//--------------------------------------------------------------------------------


let defaultState = {
    countState: {
        count: 100
    }
};


// const store = createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


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

//--------------------------------------------------------------------------------



store.dispatch(increment(100)); // sync action

store.dispatch(incrementAsync()); // async Actions
