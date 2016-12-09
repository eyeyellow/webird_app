const React = require('react');
const Signup = require('../components/Signup')

const SignupContainer = React.createClass({

  getInitialState() {
    return {
      username: '',
      email: '',
      password: '',
      confirm_password: ''
    }
  },

  handleUpdateUserName(event) {
    this.setState({
      username: event.target.value
    })
  },

  handleUpdateEmail(event) {
    this.setState({
      email: event.target.value
    })
  },

  handleUpdatePassword(event) {
    this.setState({
      password: event.target.value
    })
  },

  handleUpdateConfirmPassword(event) {
    this.setState({
      confirm_password: event.target.value
    })
  },

  render() {
    return(
      <div className='center'>
        <Signup
        userSubmit={this.state}
        onUpdateUserName={this.handleUpdateUserName}
        onUpdatePassword={this.handleUpdatePassword}
        onUpdateConfirmPassword={this.handleUpdateConfirmPassword}
        onUpdateEmail={this.handleUpdateEmail}
        username={this.state.username} />
      </div>
    )
  }
})

module.exports = SignupContainer