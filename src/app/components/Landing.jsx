const React = require('react');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;

const Landing = React.createClass({
  render() {
    return(
      <div>
      <Link to='/ListContainer'>
        <button type='button' className='btn btn-success'>Click me</button>
      </Link>
      </div>
    )
  }
})

module.exports = Landing