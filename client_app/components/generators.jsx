var React = require('react')

var makeTicketer = function*(){
  var i = 0;
  while(true){
    yield i;
    yield "ripping ticket"
    i++;
  }
}

var deliTicketer = makeTicketer()
var bakeryTicketer = makeTicketer()

var Generators = React.createClass({

  takeTicket: function(counter, el){
    var val = counter.next().value
    el.innerHTML = val
  },

  takeDeliTicket: function(){
    var myEL = this.refs.holderOne.getDOMNode()
    this.takeTicket(deliTicketer, myEL)
  },

  takeBakeryTicket: function(){
    var myEL = this.refs.holderTwo.getDOMNode()
    this.takeTicket(bakeryTicketer, myEL)
  },

  render: function(){
    return(
      <div>
        <h3>
          A Simple Generator Example:
        </h3>

        <p> There is a deli line and a bakery line </p>

        <button onClick={this.takeDeliTicket}>
          Give Deli Ticket
        </button>

        <br /><br />
        <div style={{height: "20px"}} ref="holderOne"/>
        <br /><br />

        <button onClick={this.takeBakeryTicket}>
          Give Bakery Ticket
        </button>

        <br /><br />
        <div style={{height: "20px"}} ref="holderTwo"/>
        <br /><br />

      </div>
    )
  }
})

module.exports = Generators