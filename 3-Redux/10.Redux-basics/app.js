





/*



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
function counterReducer(state = { count: 0 }, action) {

    console.log('counterReducer');

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

const ADD_TODO = "ADD_TODO";
const EDIT_TODO = "EDIT_TODO";
const DELETE_TODO = "DELETE_TODO";
const COMPLETE_TODO = "COMPLETE_TODO";
const COMPLETE_ALL = "COMPLETE_ALL";
const CLEAR_COMPLETED = "CLEAR_COMPLETED";

//--------------------------------------------------------------------------------

function addTodo(title) {
    return { type: ADD_TODO, title };
}
function deleteTodo(id) {
    return { type: DELETE_TODO, id };
}

function editTodo(id, title) {
    return { type: EDIT_TODO, id, title };
}
function completeTodo(id) {
    return { type: COMPLETE_TODO, id };
}
function completeAll() {
    return { type: COMPLETE_ALL }
}
function clearCOmpleted() {
    return { type: COMPLETE_ALL }
}

//--------------------------------------------------------------------------------

function todosReducer(state = { todos: [] }, action) {
    console.log('todosReducer');
    switch (action.type) {
        case ADD_TODO:
            let newTodo = { title: action.title, completed: false, id: Math.floor(Math.random() * 100) };
            return { todos: [...state.todos, newTodo] };
        case DELETE_TODO:
            return { todos: state.todos.filter(todo => todo.id !== action.id) };
        case EDIT_TODO:
            return { todos: state.todos.map(todo => todo.id === action.id ? Object.assign({}, todo, { title: action.title }) : todo) }
        case COMPLETE_TODO:
            return { todos: state.todos.map(todo => todo.id === action.id ? Object.assign({}, todo, { completed: !todo.completed }) : todo) }
        case CLEAR_COMPLETED:
            return { todos: state.todos.filter(todo => !todo.completed) }
        case COMPLETE_ALL:
            let isAllCompleted = state.todos.every(todo => todo.completed);
            return { todos: state.todos.map(todo => Object.assign({}, todo, { completed: !isAllCompleted })) }
    }

    return state;

}

//--------------------------------------------------------------------------------

// Store

let rootReducer = Redux.combineReducers({
    "countState": counterReducer,
    "todosState": todosReducer
});

let defaultState = {
    countState: {
        count: 100
    },
    todosState: [
        { id: 1, title: 'Learn redux', completed: false }
    ]
};

const store = Redux.createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


//--------------------------------------------------------------------------------


// View



$(function () {

    let currentState = null;
    let $badgeDisplay = $('.badge');
    store.subscribe(function () {
        let state = store.getState();
        console.log(state);
        if (currentState !== state) {
            $badgeDisplay.text(state.countState.count);
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

