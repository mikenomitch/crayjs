var React = require('react')

var WhyGenerators = React.createClass({
  logIt: function(){
    var someGen = function*(foo){
      yield "first log"
      yield foo
      yield "last log"
    };

    console.log("------");
    console.log(someGen);
    console.log("------");

    var notSureWhatYouCallThis = someGen("the argument")
    console.log(notSureWhatYouCallThis);
    console.log("------");

    var res = notSureWhatYouCallThis.next()
    console.log(res.value);
    console.log(res.done);
    console.log("------");

    var res = notSureWhatYouCallThis.next()
    console.log(res.value);
    console.log(res.done);
    console.log("------");

    var res = notSureWhatYouCallThis.next()
    console.log(res.value);
    console.log(res.done);
    console.log("------");

    var res = notSureWhatYouCallThis.next()
    console.log(res.value);
    console.log(res.done);
    console.log("------");
  },

  render: function(){
    return(
      <div>
        <h3>
          But Why Generators?
        </h3>

        <p> avoid <a href="http://callbackhell.com/">callback hell</a> </p>

        <p> <a href="http://taskjs.org/">prettier</a> and <a href="https://github.com/jmar777/suspend">simpler</a> code than callbakcs/promises</p>

        <p> check out some generator code in comparison </p>

        <button onClick={this.logIt}>
          Log one to the console
        </button>

      </div>
    )
  }
})

module.exports = WhyGenerators