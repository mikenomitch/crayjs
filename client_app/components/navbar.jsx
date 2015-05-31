var React = require('react')
var Link = require('react-router').Link

var Navbar = React.createClass({
  divStyle:{
    width: "200px",
    display: "inline-block"
  },

  linkStyle:{
    display: "block"
  },

  render: function (){
    return(
      <div id="nav" style={this.divStyle}>
        <Link style={this.linkStyle} to="macros">
          <span> Macros </span>
        </Link>
        <Link style={this.linkStyle} to="generators">
          <span> Generators </span>
        </Link>
        <Link style={this.linkStyle} to="colors">
          <span> Colors </span>
        </Link>
      </div>
    )
  }
})

module.exports = Navbar