var React = require('react')

var WhyGenerators = React.createClass({
  render: function(){
    return(
      <div>
        <h3>
          But Why Generators?
        </h3>

        <p> avoid callback hell </p>

        <p> prettier and lower level than promises </p>

        <p> check out some generator code in comparison</p>

      </div>
    )
  }
})

module.exports = WhyGenerators