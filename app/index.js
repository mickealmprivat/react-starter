var React = require('react');
var ReactDOM = require('react-dom');
var Routes = require('./Config/routes');
require('./index.css');

ReactDOM.render(
    Routes,
    document.getElementById('app')
);