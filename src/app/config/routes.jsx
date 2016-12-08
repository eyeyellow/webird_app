const React = require('react');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const IndexRoute = ReactRouter.IndexRoute;
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const Main = require('../components/Main')
const ListContainer = require('../containers/ListContainer')
const LandingContainer = require('../containers/LandingContainer')
const About = require('../components/About')
const Login = require('../components/Login')

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={LandingContainer} />
      <Route path='ListContainer' component={ListContainer} />
      <Route path='About' component={About} />
      <Route path='Login' component={Login} />
    </Route>
  </Router>
)

module.exports = routes