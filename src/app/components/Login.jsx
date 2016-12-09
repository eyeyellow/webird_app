const React = require('react');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;

const Login = React.createClass({
  render() {
    return (
      <div className='center form-container'>
        <h2>Log In</h2>
        <form>
          <label htmlFor="email">Email</label><br />
          <input type="text" name="email" id="email"></input><br />
          <label htmlFor="password">Password</label><br />
          <input type="password" name="password" id="password"></input><br />
          <Link to="ListContainer"><br />
            <button type='button' className='btn btn-success'>Submit</button>
          </Link>
        </form>
      </div>
    )
  }
})

module.exports = Login;