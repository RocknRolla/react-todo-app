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
            todos: [
                {
                    id: uuid(),
                    text: 'Sleep'
                },
                {
                    id: uuid(),
                    text: 'Run'
                },
                {
                    id: uuid(),
                    text: 'Eat'
                },
                {
                    id: uuid(),
                    text: 'Play Football'
                }
            ]
        };
    },
    handleAddTodo: function (text) {
        this.setState({
            todos: [
                ...this.state.todos,
                { id: uuid(), text }
            ]
        });
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
                <TodoList todos={todos} />
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        );
    }
});

module.exports = {TodoApp};