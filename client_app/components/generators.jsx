var React = require('react')

var makeTicketer = function*(){
  var i = 0;
  while(true){
    yield i;
    i++;
  }
}

var ticketer = makeTicketer()

var Generators = React.createClass({


  takeTicket: function(){
    console.log("taking ticket:")
    var val = ticketer.next().value
    console.log(val)
  },

  render: function(){
    return(
      <div>
        <h3>
          I am the Generators Component.
        </h3>
        <button onClick={this.takeTicket}>
          Press Me!
        </button>
      </div>
    )
  }
})

module.exports = Generators