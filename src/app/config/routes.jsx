const React = require('react');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const IndexRoute = ReactRouter.IndexRoute;
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const Main = require('../components/Main')
const ListContainer = require('../containers/ListContainer')
const SignupContainer = require('../containers/SignupContainer')
const About = require('../components/About')
const LoginContainer = require('../containers/LoginContainer')

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={SignupContainer} />
      <Route path='ListContainer' component={ListContainer} />
      <Route path='About' component={About} />
      <Route path='Login' component={LoginContainer} />
    </Route>
  </Router>
)

module.exports = routes