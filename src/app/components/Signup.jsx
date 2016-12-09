const React = require('react');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;

const Signup = React.createClass({
  render() {
    return(
      <div>
      <h1>Welcome to WeBird</h1>
        <div className="center form-container">
          <h2>Sign Up</h2>
          {console.log(this.props.userSubmit)}
          <form>
            <label htmlFor="username">Username</label><br />
            <input type="text" name="username" id="username" value={this.props.userSubmit.username} onChange={this.props.onUpdateUserName} ></input><br />
            <label htmlFor="email">Email</label><br />
            <input type="text" name="email" id="email" value={this.props.userSubmit.email} onChange={this.props.onUpdateEmail}></input><br />
            <label htmlFor="password">Password</label><br />
            <input type="password" name="password" id="password" value={this.props.userSubmit.password} onChange={this.props.onUpdatePassword}></input><br />
            <label htmlFor="confirm_password">Confirm Password</label><br />
            <input type="password" name="confirm_password" id="confirm_password" value={this.props.userSubmit.confirm_password} onChange={this.props.onUpdateConfirmPassword}></input><br />
            <Link to="ListContainer"><br />
              <button type='button' className='btn btn-success'>Submit</button>
            </Link>
          </form>
        </div>
      </div>
    )
  }
})

module.exports = Signup