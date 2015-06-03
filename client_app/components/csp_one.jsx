var React = require('react')
var csp = require('js-csp')

var MouseExample = React.createClass({
  componentDidMount: function(){
    function showText(text) {
      document.getElementById("holder").textContent = text
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

    var clicks = clickWatch(document.body, "click")

    csp.go(function*() {
      while(true) {
        showText("Click to track the mouse")
        yield clicks
        // break if mouse channel returns something
        while(true) {
          var result = yield csp.alts([moves, clicks]);

          var event = result.value
          var eventType = event.type;

          if (eventType === "click") {
            break
          }

          showText(event.x + ":" + event.y + "     -    click to stop")
        }
      }
    })
  },

  render: function(){
    return(
      <div>
        <h3>CSP Mouse Example</h3>

        <br /><br /><br />
        <h4 id="holder" />
        <br /><br /><br />

        <p> note: this was stolen from
          <a href="http://go.cognitect.com/core_async_webinar_recording">
            nolen
          </a>
        </p>

      </div>
    )
  }
})

module.exports = MouseExample