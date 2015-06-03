var React = require('react')
var axios = require('axios')
var csp = require('js-csp')

var Foo = React.createClass({

  // on mount
    // start a while loop that polls the
    // server and pushes stuff to the channel
  // make a go block which on yield changes the
  // state of the top level component

  componentDidMount: function(){

  },

  render: function(){
    return(
      <div>
        CSP TWO
      </div>
    )
  }
})

module.exports = Foo