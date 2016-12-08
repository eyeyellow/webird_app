const React = require('react');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;

const NavBar = React.createClass({
  render() {
    return (
      <nav className='navbar navbar-default'>
        <div className='collapse navbar-collapse'>
          <ul className='nav navbar-nav'>
            <li>
              <Link to='ListContainer'>
                Home
              </Link>
            </li>
            <li>
              <Link to='About'>
                About
              </Link>
            </li>
            <li>
              <Link to='Login'>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
})

module.exports = NavBar