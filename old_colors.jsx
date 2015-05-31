var React = require('react')
var _ = require('lodash')

var getRandomColor = function() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log("returning " + color)
    return color;
}

var makeColorer = function*(divToChange){
  var randomTime = 1000
  while(true){
    _.delay(function(){
      console.log("hey")
    },randomTime, this)
    yield*
  }
}

var Colors = React.createClass({

  colorChangingDiv: function(){
    return <div style={{ backgroundColor: "blue", width: "20px", height: "20px"}} />
  },

  bunchOfDivs: function(){
    return _.map([1,2,3,4,5,6,7,8,9,10], function(){
      var divvy = this.colorChangingDiv()
      var thisDivsColorer = makeColorer(divvy)
      // console.log(thisDivsColorer).next(divvy)

      setInterval(function(){
        debugger
        divvy.style = {backgroundColor: getRandomColor()}
      }.bind(this), 1000)

      return divvy
    }, this)
  },

  render: function(){
    return(
      <div>
        <h4>
          Here are the colored divs:
        </h4>

        {this.bunchOfDivs()}
      </div>
    )
  }
})

module.exports = Colors