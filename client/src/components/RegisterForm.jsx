import React, { Component } from 'react'

export default class RegisterForm extends Component {
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
      <div id="registerPage">
      <form className="form-div" onSubmit={(e) => {
        e.preventDefault()
        this.props.handleRegister(this.state)
      }}>
          
          <div id="register-text-helper"><h2 id="register-text">Register</h2></div>
          
          <div className="login-register">
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
          /></div>
        <button className="create">Create Account</button>
      </form>
      </div>
    )
  }
 }