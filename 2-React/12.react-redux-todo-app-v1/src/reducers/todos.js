

import { ADD_TODO, DELETE_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED, EDIT_TODO } from '../constants/todo-actions';

function todosReducer(state = { todos: [] }, action) {
    // console.log('todosReducer');
    switch (action.type) {
        case "LOAD_ALL_TODOS":
            return [...action.todos]
        case ADD_TODO:
            console.log(state);
            //let newTodo = { title: action.title, completed: false, id: Math.floor(Math.random() * 100) };
            return [...state, action.todo];
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.id);
        case EDIT_TODO:
            return state.map(todo => todo.id === action.id ? Object.assign({}, todo, { title: action.title }) : todo)
        case COMPLETE_TODO:
            return state.map(todo => todo.id === action.id ? Object.assign({}, todo, { completed: !todo.completed }) : todo)
        case CLEAR_COMPLETED:
            return state.filter(todo => !todo.completed)
        case COMPLETE_ALL:
            let isAllCompleted = state.every(todo => todo.completed);
            return state.map(todo => Object.assign({}, todo, { completed: !isAllCompleted }))

        default:
            return state;
    }

}

export default todosReducer;
