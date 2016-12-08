const React = require('react');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;

const Login = React.createClass({
  render() {
    return (
      <div>
        <form>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email"></input>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password"></input>
          <Link to="ListContainer">
            <button type="button">Submit</button>
          </Link>
        </form>
      </div>
    )
  }
})

module.exports = Login;