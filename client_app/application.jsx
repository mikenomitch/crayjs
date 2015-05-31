require("babel-core/polyfill")
var React = require('react')

// Router stuff
var Router = require('react-router')
var DefaultRoute = Router.DefaultRoute
var Link = Router.Link
var Route = Router.Route
var RouteHandler = Router.RouteHandler

// My Components
var Navbar = require('./components/navbar.jsx')
var MacroBasics  = require('./components/macro_basics.cray')
var CrayJs  = require('./components/macros_example.cray')
var Generators  = require('./components/generators.jsx')
var WhyGenerators  = require('./components/why_generators.jsx')
var Colors  = require('./components/colors.jsx')

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
    <Route name="macros" path="macros" handler={MacroBasics} />
    <Route name="crayjs" path="crayjs" handler={CrayJs} />
    <Route name="generators" path="generators" handler={Generators} />
    <Route name="whyGenerators" path="whyGenerators" handler={WhyGenerators} />
    <Route name="colors" path="colors" handler={Colors} />
    <DefaultRoute name="default" handler={MacroBasics} />
  </Route>
)

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body)
})
