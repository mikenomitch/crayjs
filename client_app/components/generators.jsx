var React = require('react')

var Generators = React.createClass({

  makeGen: function(starter){
    function* anotherGenerator(i) {
      yield i + 1;
      yield i + 2;
      yield i + 3;
    }

    function* generator(i){
      yield i;
      yield* anotherGenerator(i);
      yield i + 10;
      yield* anotherGenerator(i);
    }

    return generator(starter);
  },

  render: function(){
    var exampleGen = this.makeGen(10)
    var nextIt = function(){
      var val = exampleGen.next().value
      console.log(val)
    }.bind(this)

    return(
      <div>
        <h3>
          I am the Generators Component. - {exampleGen.next().value}
        </h3>
        <button onclick={nextIt}>
          Press Me!
        </button>
      </div>
    )
  }
})

module.exports = Generators