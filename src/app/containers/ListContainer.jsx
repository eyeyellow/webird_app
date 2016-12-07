const React = require('react');
const List = require('./components/List');


const ListContainer = React.createClass({

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

module.exports = ListContainer