var React = require('react')
var axios = require('axios')
var csp = require('js-csp')

var UserChannel = csp.chan()

// =====================
//   Store Type Thingy
// =====================

setInterval(function(){

  var resp = axios.get('/users')
  console.log(resp)
  csp.putAsync(UserChannel, response.data)

  axios.get('/users')
    .then(function (response) {
      csp.putAsync(UserChannel, response.data)
    })
}, 3000);

// =====================
//   React Component
// =====================

var BuddyList = React.createClass({
  componentDidMount: function(){

    var setNewUsers = function(newUsers){
      this.setState({users: newUsers})
    }.bind(this)

    csp.go(function*() {
      while(true) {
        setNewUsers(yield UserChannel)
      }
    })
  },

  getInitialState: function(){
    return {
      users: [],
      signedOn: false
    }
  },

  buddy: function(u){
    return <li> <b>{u.name}</b> is <i>{u.status}</i> </li>
  },

  signMeOn: function(){
    this.setState({signedOn: true})
  },

  signMeOff: function(){
    this.setState({signedOn: false})
  },

  render: function(){
    if(this.state.signedOn){
      return(
        <div>
          <h3> AIM Chat </h3>
          <button style={{"background-color": "red"}} onClick={this.signMeOff}>
            Sign Off
          </button>
          <h3> Active Users: </h3>
          <ul>
            {this.state.users.map(this.buddy, this)}
          </ul>
        </div>
      )
    }else{
      return (
        <div>
          <h3> AIM Chat </h3>
          <button onClick={this.signMeOn}> Sign On </button>
        </div>
      )
    }
  }
})

module.exports = BuddyList