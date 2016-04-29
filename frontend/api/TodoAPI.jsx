let $ = require('jquery');

let getTodos = () => {
    let stringTodos = localStorage.getItem('todos');
    let todos = [];

    try {
        todos = JSON.parse(stringTodos);
    } catch (e) { }

    return $.isArray(todos) ? todos : [];
};

let setTodos = (todos) => {
    if ($.isArray(todos)) {
        localStorage.setItem('todos', JSON.stringify(todos));
        return todos;
    }
};

module.exports = {getTodos, setTodos};
