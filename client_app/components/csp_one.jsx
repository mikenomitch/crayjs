var React = require('react')
var csp = require('js-csp')

var MouseExample = React.createClass({
  componentDidMount: function(){

    var el = document.getElementById("holder");

    function show(text) {
      el.textContent = text
    }

    function movementFirehose(element, eventName) {
      var ch = csp.chan(csp.buffers.dropping(1))
      element.addEventListener(eventName, function(event) {
        csp.putAsync(ch, event)
      })
      return ch
    }

    var moves = movementFirehose(document.body, "mousemove");

    function clickWatch(element, eventName) {
      var ch = csp.chan()
      element.addEventListener(eventName, function(event) {
        csp.putAsync(ch, event)
      })
      return ch
    }


    // DO THE ALTS THING!!!

    // http://go.cognitect.com/core_async_webinar_recording


    csp.go(function*() {
      while(true) {
        show("Click the button to track mouse movement")
        // break if mouse channel returns something
        while(true) {
          var result = yield csp.alts([moves, csp.timeout(50)]);
          var value = result.value;
          if (value === csp.CLOSED) {
            console.log("value === csp.CLOSED")
            console.log(csp)
            show("STOP")
            break
          }
        console.log("value === csp.CLOSED")
        console.log(csp)
        event = value;
        show(event.x + ":" + event.y)
        }
      }
    })
  },

  render: function(){
    return(
      <div>
        <h3>CSP Mouse Example</h3>
        <div id="holder" />
      </div>
    )
  }
})

module.exports = MouseExample