var React = require('react')

var CSPIntro = React.createClass({
  render: function(){
    return(
      <div>
        <h3> what is csp? </h3>

        <p> communicating sequential processes </p>
        <p> eli5 - the use of channels (a la Go or core.async) </p>

        <h4> so what is a channel? </h4>
        <p> insert some descrription of a channel here</p>

        <p>
          here is the <a href="https://github.com/ubolonton/js-csp"> github link</a>
        </p>
      </div>
    )
  }
})

module.exports = CSPIntro