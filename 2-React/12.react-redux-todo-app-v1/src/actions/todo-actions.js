

import { ADD_TODO, DELETE_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED, EDIT_TODO } from '../constants/todo-actions';


import $ from 'jquery';

//----------------------------------------------------------

// export function addTodo(title) {
//     return { type: ADD_TODO, title };
// }
// export function deleteTodo(id) {
//     return { type: DELETE_TODO, id };
// }

// export function editTodo(id, title) {
//     return { type: EDIT_TODO, id, title };
// }
// export function completeTodo(id) {
//     return { type: COMPLETE_TODO, id };
// }
// export function completeAll() {
//     return { type: COMPLETE_ALL }
// }
// export function clearCompleted() {
//     return { type: CLEAR_COMPLETED }
// }


//----------------------------------------------------------

const apiUrl = "http://localhost:8080/api/todos";

export function addTodo(title) {
    return function (dispatch) {

        dispatch({ type: 'ADD_TODO_INIT' });
        $.ajax(apiUrl, {
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ title }),
            success: function (todo) {
                dispatch({ type: ADD_TODO, todo });
            },
            error: function () {
                dispatch({ type: 'ADD_TODO_FAIL',messages:'error'});
            }
        });

    }
}
export function deleteTodo(id) {
    return function (dispatch) {
        $.ajax(apiUrl + "/" + id, {
            method: 'DELETE',
            success: function (count) {
                dispatch({ type: DELETE_TODO, id });
            }
        });
    }
}

export function editTodo(id, title) {
    return function (dispatch) {
        $.ajax(apiUrl + "/" + id, {
            method: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify({ id, title }),
            success: function (count) {
                dispatch({ type: EDIT_TODO, id, title });
            }
        });
    }
}
export function completeTodo(id) {
    return function (dispatch) {
        $.ajax(apiUrl + "/" + id, {
            method: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify({ id, completed: true }),
            success: function (count) {
                dispatch({ type: COMPLETE_TODO, id });
            }
        });
    }
}

export function completeAll() {
    return { type: COMPLETE_ALL }
}
export function clearCompleted() {
    return { type: CLEAR_COMPLETED }
}