const React = require('react');
const NavBar = require('./NavBar');

var Main = React.createClass({
  render() {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main