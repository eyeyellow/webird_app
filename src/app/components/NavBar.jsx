const React = require('react');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;

const NavBar = React.createClass({
  render() {
    return (
      <div className='navbar'>
        <Link to='Home'>
          <button type='button' className='btn btn-success'>Home</button>
        </Link>
        <Link to='About'>
          <button type='button' className='btn btn-success'>About</button>
        </Link>
        <Link to='Login'>
          <button type='button' className='btn btn-success'>Login</button>
        </Link>
      </div>
    )
  }
})

module.exports = NavBar