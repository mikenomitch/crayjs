require("babel-core/polyfill")
require("./style.css")
var React = require('react')

// Router stuff
var Router = require('react-router')
var DefaultRoute = Router.DefaultRoute
var Route = Router.Route
var RouteHandler = Router.RouteHandler

// My Components
var Navbar = require('./components/navbar.jsx')
var MacroBasics  = require('./components/macro_basics.cray')
var GetPumped  = require('./components/get_pumped.jsx')
var CrayJs  = require('./components/macros_example.cray')
var Generators  = require('./components/generators.jsx')
var WhyGenerators  = require('./components/why_generators.jsx')
var CSPIntro  = require('./components/csp_intro.jsx')
var CSPOne  = require('./components/csp_one.jsx')
var CSPTwo  = require('./components/csp_two.jsx')
var AllTogether  = require('./components/all_together.cray')

var App = React.createClass({
  render: function(){
    return(
      <div>
        <Navbar />
        <div style={{display: "inline-block"}}>
          <RouteHandler />
        </div>
      </div>
    )
  }
})

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="getPumped" path="getPumped" handler={GetPumped} />
    <Route name="crayjs" path="crayjs" handler={CrayJs} />
    <Route name="macros" path="macros" handler={MacroBasics} />
    <Route name="generators" path="generators" handler={Generators} />
    <Route name="whyGenerators" path="whyGenerators" handler={WhyGenerators} />
    <Route name="cspIntro" path="cspIntro" handler={CSPIntro} />
    <Route name="cspOne" path="cspOne" handler={CSPOne} />
    <Route name="cspTwo" path="cspTwo" handler={CSPTwo} />
    <Route name="allTogether" path="allTogether" handler={AllTogether} />
    <DefaultRoute name="default" handler={GetPumped} />
  </Route>
)

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body)
})
