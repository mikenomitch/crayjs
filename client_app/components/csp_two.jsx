var React = require('react')
var axios = require('axios')
var csp = require('js-csp')
var suspend = require('suspend')

var UserChannel = csp.chan(1)

// =====================
//   Store Type Thingy
// =====================

setInterval(function(){
  suspend(function*() {
    var response = yield axios.get('/users');
    csp.putAsync(UserChannel, response.data)
  })();
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
        var chanResponse = yield UserChannel
        if(chanResponse == csp.CLOSED){ break }
        setNewUsers(chanResponse)
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
    UserChannel.close()
    this.setState({signedOn: false})
  },

  // takeTheDefault: function(){
  //   csp.takeAsync(UserChannel, function(value) { console.log("Got ", value)})
  // },

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