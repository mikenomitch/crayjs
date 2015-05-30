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
    }

    return generator(starter);
  },

  genExample: makeGen(5),

  render: function(){
    return(
      <h3>
        I am the Generators Component. - {genExample}
      </h3>
    )
  }
})

module.exports = Generators