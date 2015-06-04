var React = require('react')
var Router = require('react-router')
var Link = Router.Link

var Colors = React.createClass({
  render: function(){
    return(
      <div style={{textAlign: "center"}}>
        <h3> are you ready? </h3>
        <img src="http://static5.businessinsider.com/image/5538b583dd0895d7058b457e/2-tim-cook-apr-23,-2015-09_25.gif" /> <br />
        <h2>
          <Link to="crayjs"> lets get cray. </Link>
        </h2>
      </div>
    )
  }
})

module.exports = Colors