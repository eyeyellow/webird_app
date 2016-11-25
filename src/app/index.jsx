const React = require('react');
const List = require('./List');
const { render } = require('react-dom');
const { birds } = require('../public/data');

const App = React.createClass({

  displayBirds: function(birdArray) {
    birdArray.forEach(function(bird) {
      console.log(bird);
    })
  },
  render: function() {
    return(
      <div>
        <List birds={birds} />
      </div>
    )
  }
})

render(<App birds={birds} />, document.getElementById('app'));