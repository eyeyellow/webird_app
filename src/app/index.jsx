const React = require('react');
const { render } = require('react-dom');
const routes = require('./config/routes')


render(routes, document.getElementById('app'));