import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }
  
  render() {
    return (
      <div id="loginPage">
      <form className="form-div" onSubmit={(e) => {
        e.preventDefault()
        this.props.handleLogin(this.state)
      }}>
        <div id="login-text-helper"><h2 id="login-text">Login</h2></div><div className="login-register">
        <label htmlFor="username">username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button className="login">Submit</button></div>
        <button className="register"><Link to='/register'>Register Account</Link></button>
        </form>
        </div>
    )
  }
}
