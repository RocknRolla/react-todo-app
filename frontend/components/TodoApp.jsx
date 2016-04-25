let React = require('react');
let {TodoList} = require('TodoList');

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
    render: function () {
        let {todos} = this.state;

        return (
            <div>
                <TodoList todos={todos} />
            </div>
        );
    }
});

module.exports = {TodoApp};