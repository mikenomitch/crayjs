var React = require('react')
var csp = require('js-csp')

var Foo = React.createClass({
  render: function(){
    return(
      <div>
        CSP ONE
      </div>
    )
  }
})

module.exports = Foo