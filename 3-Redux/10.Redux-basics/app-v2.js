


// Constants
//--------------------------------------------------------------------------------
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
//--------------------------------------------------------------------------------
// Action Creators
function increment(value) {
    return { type: INCREMENT, value };
}

function decrement(value) {
    return { type: DECREMENT, value };
}
//--------------------------------------------------------------------------------
// Reducer(s)
function counterReducer(state = { count: 0 }, action) {
    // console.log('counterReducer');
    switch (action.type) {
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


let rootReducer = Redux.combineReducers({
    "countState": counterReducer
});


//--------------------------------------------------------------------------------


let defaultState = {
    countState: {
        count: 100
    }
};


const store = Redux.createStore(rootReducer, defaultState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//--------------------------------------------------------------------------------


// store.dispatch(increment(100));  // Sync Action


// Timer API ( Asynch API )

// // begin async
// setTimeout(function () {
//     // timout..
// }, 2000);