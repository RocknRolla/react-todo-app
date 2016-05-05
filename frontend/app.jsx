let React = require('react');
let ReactDOM = require('react-dom');
let { Route, Router, IndexRoute, hashHistory } = require('react-router');

let {TodoApp} = require('TodoApp');

let actions = require('actions');
let store = require('configureStore').configure();

$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
    <TodoApp/>,
    document.getElementById('app')
);
