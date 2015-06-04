var React = require('react')
var Link = require('react-router').Link

var Navbar = React.createClass({
  divStyle:{
    height: "1000px",
    width: "200px",
    display: "inline-block",
    float: "left"
  },

  linkStyle:{
    display: "block"
  },

  render: function (){
    return(
      <div id="nav" style={this.divStyle}>
        <Link style={this.linkStyle} to="getPumped">
          <span> Get Pumped </span>
        </Link>

        <Link style={this.linkStyle} to="crayjs">
          <span> CRAY </span>
        </Link>

        <Link style={this.linkStyle} to="macros">
          <span> IIFYM </span>
        </Link>

        <Link style={this.linkStyle} to="generators">
          <span> Waiting in Line </span>
        </Link>

        <Link style={this.linkStyle} to="whyGenerators">
          <span> Why Generators? </span>
        </Link>

        <Link style={this.linkStyle} to="cspIntro">
          <span> CSP </span>
        </Link>

        <Link style={this.linkStyle} to="cspOne">
          <span> Mouse Hunt </span>
        </Link>

        <Link style={this.linkStyle} to="cspTwo">
          <span> AIM </span>
        </Link>

      </div>
    )
  }
})

module.exports = Navbar