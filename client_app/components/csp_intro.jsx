var React = require('react')

var CSPIntro = React.createClass({
  render: function(){
    return(
      <div>
        <h3> what is csp? </h3>

        <p> communicating sequential processes </p>
        <p> eli5 - the use of channels (a la core.async or Go ...apparently) </p>

        <h4> what is a channel? </h4>
        <p> like a queue with some special propeties - like a conveyor belt </p>

        <h4> what is a go routine? </h4>
        <p> "A goroutine is a lightweight thread of execution" - process that runs seperately and concurrently with other processes </p>

        <h4> how are they related? </h4>
        <p> channels are how the go routines pass messages between one another</p>

        <p>
          here is the <a href="https://github.com/ubolonton/js-csp"> github link to js-csp</a> <br/>
          <a href="https://github.com/ubolonton/js-csp"> and lets look at some docs</a>
        </p>
      </div>
    )
  }
})

module.exports = CSPIntro