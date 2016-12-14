const React = require('react');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;


const Login = React.createClass({

  getInitialState: function() {
    return {
      email: '',
      password: ''
    }
  },

  handleSubmit: function(event) {
    event.preventDefault()
    var email = this.state.email
    var password = this.state.password
    this.props.onLoginSubmit({email: email, password: password})
  },

  setValue: function(field, event) {
    var object = {}
    object[field] = event.target.value
    this.setState(object)
  },

  render() {
    return (
      <div className='center form-container'>
        <h2>Log In</h2>
        <form onSubmit = {this.handleSubmit} >
          <label htmlFor="email">Email</label><br />
          <input type="text" name="email" id="email"
          onChange = {this.setValue.bind(this, 'email')}
          ></input><br />
          <label htmlFor="password">Password</label><br />
          <input type="password" name="password" id="password"
          onChange = {this.setValue.bind(this, 'password')}
          ></input><br />
          <Link to="ListContainer"><br />
            <button type='button' className='btn btn-success' onClick={this.handleSubmit}>Submit</button>
          </Link>
        </form>
      </div>
    )
  }
})

module.exports = Login;