const Login = require('../components/Login');
const React = require('react');
const axios = require('axios');

const LoginContainer = React.createClass({
  getInitialState: function() {
    return {
      data: []
    }
  },

  handleLoginSubmit: function (credentials) {
    var email = credentials.email
    var password = credentials.password
    console.log(credentials)

    var url = 'http://localhost:3000/login?email=' + email + "&password=" + password

    var request = new Request(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })

    return fetch(request).then(response => {
      console.log(response.ok)
    }).catch(error => {
      return error;
    });
    // $.ajax({
    //   url: 'http://localhost:3000/login?email=' + email + "&password=" + password,
    //   data: credentials,
    //   type: 'POST',
    //   crossDomain: true,
    //   success: function(data) {
    //     this.setState({data: data})
    //   }.bind(this),
    //   error: function() {
    //     console.error("unsuccessful")
    //   }
    // })
  },

  render() {
    return (
      <div>
        <Login onLoginSubmit = {this.handleLoginSubmit} />
      </div>
    )
  }
})

module.exports = LoginContainer