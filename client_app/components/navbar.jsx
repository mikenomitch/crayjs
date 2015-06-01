var React = require('react')
var Link = require('react-router').Link

var Navbar = React.createClass({
  divStyle:{
    height: "1000px",
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
          <span> Macros Intro </span>
        </Link>

        <Link style={this.linkStyle} to="crayjs">
          <span> Some Usage </span>
        </Link>

        <Link style={this.linkStyle} to="generators">
          <span> Generators </span>
        </Link>

        <Link style={this.linkStyle} to="whyGenerators">
          <span> Why Generators? </span>
        </Link>

        <Link style={this.linkStyle} to="cspIntro">
          <span> CSP Intro </span>
        </Link>

        <Link style={this.linkStyle} to="cspOne">
          <span> CSP Example 1 </span>
        </Link>

        <Link style={this.linkStyle} to="cspTwo">
          <span> CSP Example Two </span>
        </Link>

        <Link style={this.linkStyle} to="allTogether">
          <span> All Together </span>
        </Link>
      </div>
    )
  }
})

module.exports = Navbar