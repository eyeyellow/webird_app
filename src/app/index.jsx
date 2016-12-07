const React = require('react');
const { render } = require('react-dom');
const { birds } = require('../public/data');


render(<App birds={birds} />, document.getElementById('app'));