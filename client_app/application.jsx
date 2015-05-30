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
var Generators  = require('./components/generators.jsx')
var Baz  = require('./components/baz.jsx')

var App = React.createClass({
  render: function(){
    return(
      <div>
        <Navbar />
        This text is in application.jsx: when a child route is active, a child component shows up below it.
        See the react-router documentation for more info.
        <RouteHandler />
      </div>
    )
  }
})

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="macros" path="macros" handler={MacroBasics} />
    <Route name="generators" path="generators" handler={Generators} />
    <Route name="baz" path="baz" handler={Baz} />
    <DefaultRoute name="default" handler={MacroBasics} />
  </Route>
)

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body)
})
