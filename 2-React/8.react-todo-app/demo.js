

// ES6

let funcName1 = "all";
let funcName2 = "active";
let funcName3 = "completed";

let util = {
    [funcName1]: () => true,
    [funcName2]: (item) => !item.completed,
    [funcName3]: (item) => item.completed
}

//------------------------------------------------

let todos = [
    { id: 1, title: 'Learn JavaScript', completed: true },
    { id: 2, title: 'Learn React', completed: false },
    { id: 3, title: 'Learn Redux', completed: false }
];

let filter = "completed";

// all todos
let filteredTodos = todos;

// active todos
filteredTodos = todos.filter(function () {
    //..
});
// completed todos
filteredTodos = todos.filter(function () {

});

console.log(filteredTodos.length);