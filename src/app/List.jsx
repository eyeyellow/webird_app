const React = require('react');
const { render } = require('react-dom');

const List = React.createClass({
  render: function() {
    var birds = this.props.birds.map(function(bird) {
      return(
        <div>
          <h1>species: {bird.species}</h1>
          <p>location: {bird.location}</p>
          <p>count: {bird.count}</p>
          <p>vegetation: {bird.vegetation}</p>
          <p>habitat: {bird.habitat}</p>
          <p>behavior: {bird.behavior}</p>
        </div>
      )
    })
  return(<div>{birds}</div>)
  }
})

module.exports = List