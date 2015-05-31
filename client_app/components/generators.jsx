var React = require('react')

var makeTicketer = function*(){
  var i = 0;
  while(true){
    yield i;
    yield "incrementing..."
    i++;
  }
}

var ticketerOne = makeTicketer()
var ticketerTwo = makeTicketer()

var Generators = React.createClass({

  takeTicketFromOne: function(){
    var val = ticketerOne.next().value
    var holder = this.refs.holderOne.getDOMNode()
    holder.innerHTML = val
  },

  takeTicketFromTwo: function(){
    var val = ticketerTwo.next().value
    var holder = this.refs.holderTwo.getDOMNode()
    holder.innerHTML = val
  },

  render: function(){
    return(
      <div>
        <h3>
          A Simple Generator Example:
        </h3>

        <button onClick={this.takeTicketFromOne}>
          I will give you a number:
        </button>

        <div style={{height: "20px"}} ref="holderOne"/>

        <button onClick={this.takeTicketFromTwo}>
          I do the same thing with separate state:
        </button>

        <div style={{height: "20px"}} ref="holderTwo"/>

      </div>
    )
  }
})

module.exports = Generators