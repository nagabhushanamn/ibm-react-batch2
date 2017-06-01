





/*

e.g counter-app

 Action(s)
 
    a. {type:INCREMENT,value:1}
    b. {type:DECREMENT,value:1}

ActionCreator(s)

    function increment(value){
       return {type:INCREMENT,value}
    }
    function decrement(value){
       return {type:DECREMENT,value}
    }

*/

//--------------------------------------------------------------------------------

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

//--------------------------------------------------------------------------------


function increment(value) {
    return { type: INCREMENT, value };
}

function decrement(value) {
    return { type: DECREMENT, value };
}


//--------------------------------------------------------------------------------


// Reducer(s)


function counter(state = { count: 0 }, action) {

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

//--------------------------------------------------------------------------------

// Store

const store = Redux.createStore(counter, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


//--------------------------------------------------------------------------------


// View



$(function () {

    let currentState = null;
    let $badgeDisplay = $('.badge');
    store.subscribe(function () {
        let state = store.getState();
        if (currentState !== state) {
            $badgeDisplay.text(state.count);
            currentState = state;
        }
    });

    $('.btn-primary').click(function () {
        store.dispatch(increment(1));
    });
    $('.btn-danger').click(function () {
        store.dispatch(decrement(1));
    });

})


//--------------------------------------------------------------------------------

