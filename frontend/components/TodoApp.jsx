let React = require('react');
let {TodoList} = require('TodoList');
let {AddTodo} = require('AddTodo');

let TodoApp = React.createClass({
    getInitialState: function () {
        return {
            todos: [
                {
                    id: 1,
                    text: 'Sleep'
                },
                {
                    id: 2,
                    text: 'Run'
                },
                {
                    id: 3,
                    text: 'Eat'
                },
                {
                    id: 4,
                    text: 'Play Football'
                }
            ]
        };
    },
    handleAddTodo: function (text) {
        alert('new todo: ' + text);
    },
    render: function () {
        let {todos} = this.state;

        return (
            <div>
                <TodoList todos={todos} />
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        );
    }
});

module.exports = {TodoApp};