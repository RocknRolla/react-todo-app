let React = require('react');
let moment = require('moment');

let Todo = React.createClass({
    render: function () {
        let {id, text, completed, createdAt, completedAt} = this.props;

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
            <div onClick={() => {
                this.props.onToggle(id);
            }}>
                <input type="checkbox" checked={completed} />
                {text}
                <p>{text}</p>
                <p>{renderDate()}</p>
            </div>
        );
    }
});

module.exports = {Todo};