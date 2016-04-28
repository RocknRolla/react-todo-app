let React = require('react');
let uuid = require('uuid');
let {TodoList} = require('TodoList');
let {AddTodo} = require('AddTodo');
let {TodoSearch} = require('TodoSearch');

let TodoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
            todos:  [
                {
                    id: uuid(),
                    text: 'Sleep',
                    completed: false
                },
                {
                    id: uuid(),
                    text: 'Running',
                    completed: true
                },
                {
                    id: uuid(),
                    text: 'Eat',
                    completed: false
                },
                {
                    id: uuid(),
                    text: 'Play Football',
                    completed: false
                }
            ]
        };
    },
    handleAddTodo: function (text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text,
                    completed: false
                }
            ]
        });
    },
    handleToggle: function (id) {
        let updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.setState({ todos: updatedTodos });
    },
    handleSearch: function (showCompleted, searchText) {
        this.setState({
            showCompleted,
            searchText: searchText.toLowerCase()
        });
    },
    render: function () {
        let {todos} = this.state;

        return (
            <div>
                <TodoSearch onSearch={this.handleSearch} />
                <TodoList todos={todos} onToggle={this.handleToggle} />
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        );
    }
});

module.exports = {TodoApp};