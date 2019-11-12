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
      <form onSubmit={(e) => {
        e.preventDefault()
        this.props.handleRegister(this.state)
      }}>
        <h2>Register</h2>
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
        <button>Submit</button>

      </form>
    )
  }
}
