let React = require('react');
let moment = require('moment');

let Todo = React.createClass({
    render: function () {
        let {id, text, completed, createdAt, completedAt} = this.props;
        let todoClassName = completed ? 'todo todo-completed' : 'todo';

        let renderDate = () => {
            let message = 'Created ';
            let timestamp = createdAt;

            if (completed) {
                let message = 'Completed ';
                let timestamp = completedAt;
            }

            return message + moment.unix(timestamp).format('MMM Do YYYY @ H:mm');
        };

        return (
            <div className={todoClassName} onClick={() => { this.props.onToggle(id); }}>
                <div>
                    <input type="checkbox" checked={completed} />
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{renderDate()}</p>
                </div>
            </div>
        );
    }
});

module.exports = {Todo};